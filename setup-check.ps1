<#
.SYNOPSIS
    Dev environment setup & verification script (Windows / PowerShell)
    Checks/installs Git, Node.js, Python, backend (pip) and frontend (npm)
    dependencies, and prints a detailed per-item report (name, version,
    status, install location) to console + CSV.

.NOTES
    Run from PowerShell as Administrator, from the project root
    (the folder containing /frontend and /backend):

        powershell -ExecutionPolicy Bypass -File .\setup-check.ps1

    Or just double-click run-setup.bat (launcher provided separately).
#>

# ------------------------------------------------------------
# CONFIG - adjust if your folder names differ
# ------------------------------------------------------------
$FrontendFolder   = "frontend"
$BackendFolder    = "backend"
$RequirementsFile = "requirements.txt"
$ReportCsvPath    = ".\setup-report.csv"

# ------------------------------------------------------------
# Use a proper list object - avoids the "$var += inside function
# doesn't persist" PowerShell scoping bug. .Add() mutates the SAME
# object every call, so it always accumulates correctly.
# ------------------------------------------------------------
$script:Report = [System.Collections.Generic.List[PSCustomObject]]::new()

# Start a fresh CSV immediately so partial results survive a crash
"Component,Version,Status,Location" | Out-File -FilePath $ReportCsvPath -Encoding utf8

function Add-Report {
    param(
        [string]$Name,
        [string]$Version = "-",
        [string]$Status,        # OK / ALREADY INSTALLED / NEWLY INSTALLED / FAILED / SKIPPED
        [string]$Location = "-"
    )
    $row = [PSCustomObject]@{
        Component = $Name
        Version   = $Version
        Status    = $Status
        Location  = $Location
    }
    $script:Report.Add($row)

    # Write immediately to CSV (append) so nothing is lost if script crashes later
    $escaped = $row.PSObject.Properties.Value | ForEach-Object {
        '"' + ($_ -replace '"','""') + '"'
    }
    ($escaped -join ",") | Out-File -FilePath $ReportCsvPath -Encoding utf8 -Append

    $color = switch ($Status) {
        "OK"                { "Green" }
        "ALREADY INSTALLED" { "Green" }
        "NEWLY INSTALLED"   { "Green" }
        "SKIPPED"           { "Yellow" }
        "FAILED"            { "Red" }
        default             { "White" }
    }
    Write-Host ("  [{0}] {1} {2} - {3}" -f $Status, $Name, $Version, $Location) -ForegroundColor $color
}

function Test-Command {
    param($Command)
    return (Get-Command $Command -ErrorAction SilentlyContinue) -ne $null
}

function Install-WithWinget {
    param($PackageId)
    if (-not (Test-Command "winget")) { return $false }
    try {
        winget install --id $PackageId -e --accept-package-agreements --accept-source-agreements *> $null
        return $true
    } catch {
        return $false
    }
}

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host " Dev Environment Setup & Verification" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan

# ------------------------------------------------------------
# 1. GIT
# ------------------------------------------------------------
Write-Host "`n[1/6] Git" -ForegroundColor Cyan
if (Test-Command "git") {
    $cmd = Get-Command git
    Add-Report "Git" (git --version) "ALREADY INSTALLED" $cmd.Source
} else {
    Write-Host "  Not found. Installing..." -ForegroundColor Yellow
    Install-WithWinget "Git.Git" | Out-Null
    if (Test-Command "git") {
        $cmd = Get-Command git
        Add-Report "Git" (git --version) "NEWLY INSTALLED" $cmd.Source
    } else {
        Add-Report "Git" "-" "FAILED" "Install manually: https://git-scm.com/download/win"
    }
}

# ------------------------------------------------------------
# 2. NODE.JS + NPM
# ------------------------------------------------------------
Write-Host "`n[2/6] Node.js / npm" -ForegroundColor Cyan
if (Test-Command "node") {
    $cmd = Get-Command node
    Add-Report "Node.js" (node --version) "ALREADY INSTALLED" $cmd.Source
} else {
    Write-Host "  Not found. Installing..." -ForegroundColor Yellow
    Install-WithWinget "OpenJS.NodeJS.LTS" | Out-Null
    if (Test-Command "node") {
        $cmd = Get-Command node
        Add-Report "Node.js" (node --version) "NEWLY INSTALLED" $cmd.Source
    } else {
        Add-Report "Node.js" "-" "FAILED" "Install manually: https://nodejs.org"
    }
}

if (Test-Command "npm") {
    $cmd = Get-Command npm
    Add-Report "npm" (npm --version) "ALREADY INSTALLED" $cmd.Source
} else {
    Add-Report "npm" "-" "FAILED" "Usually ships with Node.js - reinstall Node"
}

# ------------------------------------------------------------
# 3. PYTHON + PIP
# ------------------------------------------------------------
Write-Host "`n[3/6] Python / pip" -ForegroundColor Cyan
if (Test-Command "python") {
    $cmd = Get-Command python
    Add-Report "Python" (python --version) "ALREADY INSTALLED" $cmd.Source
} else {
    Write-Host "  Not found. Installing..." -ForegroundColor Yellow
    Install-WithWinget "Python.Python.3.12" | Out-Null
    if (Test-Command "python") {
        $cmd = Get-Command python
        Add-Report "Python" (python --version) "NEWLY INSTALLED" $cmd.Source
    } else {
        Add-Report "Python" "-" "FAILED" "Install manually: https://python.org (check 'Add to PATH')"
    }
}

if (Test-Command "pip") {
    $cmd = Get-Command pip
    Add-Report "pip" (pip --version) "ALREADY INSTALLED" $cmd.Source
} else {
    Add-Report "pip" "-" "FAILED" "Usually ships with Python - reinstall Python"
}

# ------------------------------------------------------------
# 4. BACKEND PYTHON PACKAGES (global install, no venv)
# ------------------------------------------------------------
Write-Host "`n[4/6] Backend Python packages" -ForegroundColor Cyan
$reqPath = Join-Path $BackendFolder $RequirementsFile

# If backend folder or requirements.txt don't exist yet, create them
if (-not (Test-Path $BackendFolder)) {
    Write-Host "  Creating $BackendFolder folder..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $BackendFolder | Out-Null
}
if (-not (Test-Path $reqPath)) {
    Write-Host "  $reqPath not found - creating it with the standard backend stack..." -ForegroundColor Yellow
    @"
fastapi
uvicorn[standard]
sqlalchemy
alembic
psycopg2-binary
python-dotenv
pydantic
pydantic-settings
python-jose[cryptography]
passlib[bcrypt]
httpx
"@ | Out-File -FilePath $reqPath -Encoding utf8
}

if (Test-Path $reqPath) {
    Write-Host "  Installing from $reqPath (global, no venv)..." -ForegroundColor Yellow
    pip install -r $reqPath
    $installExit = $LASTEXITCODE

    # Report each package individually: name, version, status, location
    Get-Content $reqPath | ForEach-Object {
        $pkgLine = $_.Trim()
        if ($pkgLine -and -not $pkgLine.StartsWith("#")) {
            # Strip version specifiers / extras for the lookup name, e.g. "passlib[bcrypt]" -> "passlib"
            $pkgName = ($pkgLine -split '[=<>\[!~]')[0].Trim()
            if ($pkgName) {
                $showInfo = pip show $pkgName 2>$null
                if ($showInfo) {
                    $ver = ($showInfo | Select-String "^Version:") -replace "Version:\s*",""
                    $loc = ($showInfo | Select-String "^Location:") -replace "Location:\s*",""
                    Add-Report $pkgName $ver.Trim() "OK" $loc.Trim()
                } else {
                    Add-Report $pkgName "-" "FAILED" "Not found after pip install - check error output above"
                }
            }
        }
    }
} else {
    Add-Report "Backend dependencies" "-" "SKIPPED" "$reqPath not found"
}

# ------------------------------------------------------------
# 5. FRONTEND NPM PACKAGES
# ------------------------------------------------------------
Write-Host "`n[5/6] Frontend npm packages" -ForegroundColor Cyan
$pkgJsonPath = Join-Path $FrontendFolder "package.json"

if (-not (Test-Path $pkgJsonPath)) {
    Write-Host "  $pkgJsonPath not found - scaffolding a new Next.js app in '$FrontendFolder'..." -ForegroundColor Yellow
    # Non-interactive create-next-app: TypeScript, ESLint, Tailwind, App Router, src dir
    npx --yes create-next-app@latest $FrontendFolder `
        --typescript --eslint --tailwind --app --src-dir `
        --import-alias "@/*" --use-npm --no-turbopack 2>&1 | Out-Host
}

if (Test-Path $pkgJsonPath) {
    Push-Location $FrontendFolder
    Write-Host "  Running npm install..." -ForegroundColor Yellow
    npm install
    $npmExit = $LASTEXITCODE

    if ($npmExit -eq 0) {
        # Pull key package versions + install path from package.json deps
        try {
            $pkgJson = Get-Content "package.json" -Raw | ConvertFrom-Json
            $deps = @{}
            if ($pkgJson.dependencies) { $pkgJson.dependencies.PSObject.Properties | ForEach-Object { $deps[$_.Name] = $_.Value } }
            foreach ($depName in $deps.Keys) {
                $modPath = Join-Path (Get-Location) "node_modules\$depName"
                if (Test-Path $modPath) {
                    $depPkgJson = Join-Path $modPath "package.json"
                    $installedVer = "-"
                    if (Test-Path $depPkgJson) {
                        $installedVer = (Get-Content $depPkgJson -Raw | ConvertFrom-Json).version
                    }
                    Add-Report $depName $installedVer "OK" $modPath
                } else {
                    Add-Report $depName $deps[$depName] "FAILED" "Not found in node_modules"
                }
            }
        } catch {
            Add-Report "Frontend dependencies" "-" "OK" "npm install succeeded but could not parse individual package versions"
        }
    } else {
        Add-Report "Frontend dependencies" "-" "FAILED" "npm install returned exit code $npmExit - check error output above"
    }
    Pop-Location
} else {
    Add-Report "Frontend dependencies" "-" "SKIPPED" "$pkgJsonPath not found"
}

# ------------------------------------------------------------
# 6. .env FILE CHECK
# ------------------------------------------------------------
Write-Host "`n[6/6] .env file" -ForegroundColor Cyan
$envPath = Join-Path $BackendFolder ".env"
if (Test-Path $envPath) {
    Add-Report ".env" "-" "OK" (Resolve-Path $envPath)
} else {
    Add-Report ".env" "-" "FAILED" "Not found at $envPath - create manually with DATABASE_URL, LLM_API_KEY, SECRET_KEY (never commit this file)"
}

# ------------------------------------------------------------
# FINAL REPORT (console)
# ------------------------------------------------------------
Write-Host "`n===================================================" -ForegroundColor Cyan
Write-Host " FINAL REPORT" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan

$script:Report | Format-Table -AutoSize -Property Component, Version, Status, Location

$failedCount = ($script:Report | Where-Object { $_.Status -eq "FAILED" }).Count
$totalCount  = $script:Report.Count

Write-Host "---------------------------------------------------"
Write-Host "Total items checked: $totalCount" -ForegroundColor Cyan
if ($failedCount -eq 0) {
    Write-Host "All checks passed. Environment is ready." -ForegroundColor Green
} else {
    Write-Host "$failedCount item(s) FAILED - see table above / setup-report.csv" -ForegroundColor Red
}
Write-Host "Full report saved to: $((Resolve-Path $ReportCsvPath).Path)" -ForegroundColor Cyan
Write-Host "---------------------------------------------------`n"

# Keep window open if run by double-click
Write-Host "Press Enter to close this window..."
Read-Host | Out-Null
