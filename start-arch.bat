@echo off
cd %~dp0

REM Start the local server
start http://127.0.0.1:3000

REM Execute the Node.js command
echo Press Ctrl+C or close this window to stop the server.
node\node build\index.js