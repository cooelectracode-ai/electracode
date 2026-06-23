@echo off
REM Launcher for build-backend.ps1
REM Double-click this file - it handles execution policy and keeps the window open.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0build-backend.ps1"

echo.
echo Script finished. Press any key to close.
pause >nul
