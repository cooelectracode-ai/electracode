@echo off
REM Launcher for setup-check.ps1
REM Double-click this file - it handles execution policy and keeps the window open.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup-check.ps1"

echo.
echo Script finished. Press any key to close.
pause >nul
