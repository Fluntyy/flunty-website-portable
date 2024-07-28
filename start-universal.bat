@echo off
cd %~dp0

REM Start the local server
start http://127.0.0.1:3000

REM Determine the system architecture
set ARCHITECTURE=%PROCESSOR_ARCHITECTURE%

REM Execute the appropriate Node.js command based on architecture
echo Press Ctrl+C or close this window to stop the server.
if "%ARCHITECTURE%"=="X86" (
    node\x86\node build\index.js
) else if "%ARCHITECTURE%"=="AMD64" (
    node\x64\node build\index.js
) else if "%ARCHITECTURE%"=="ARM64" (
    node\arm64\node build\index.js
) else (
    echo Unable to determine architecture.
    pause
    exit /b 1
)