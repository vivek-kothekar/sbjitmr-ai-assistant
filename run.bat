@echo off
echo Starting SBJITMR AI Assistant...

REM Check if .venv exists
if not exist ".venv" (
    echo Creating virtual environment...
    uv venv .venv 2>nul || python -m venv .venv
    echo Installing dependencies...
    .venv\Scripts\pip install -r requirements.txt
)

REM Launch default browser after 1 second
start "" cmd /c "timeout /t 1 /nobreak >nul & start http://127.0.0.1:5000"

REM Run Flask app
.venv\Scripts\python app.py
pause
