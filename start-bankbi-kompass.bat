@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 goto missingnode
if not exist "node_modules\vite\bin\vite.js" (
  call npm.cmd ci
  if errorlevel 1 goto failed
)
if not exist "dist\index.html" (
  call npm.cmd run build
  if errorlevel 1 goto failed
)
echo.
echo BankBI Kompass: http://127.0.0.1:4173/bankbi-kompass/
echo Dieses Fenster offen lassen. Zum Beenden Strg+C druecken.
echo Falls die Anwendung bereits laeuft, einfach die URL im Browser oeffnen.
echo.
call npm.cmd run preview -- --host 127.0.0.1 --port 4173 --strictPort
if errorlevel 1 goto failed
exit /b 0
:missingnode
echo Node.js wurde nicht gefunden. Node.js 22.18 oder neuer installieren.
pause
exit /b 1
:failed
echo.
echo Start fehlgeschlagen. Bitte die Fehlermeldung oben beachten.
echo Falls Port 4173 anderweitig belegt ist, im Projektordner ausfuehren:
echo npm.cmd run preview -- --host 127.0.0.1 --port 4174 --strictPort
echo Alternative URL: http://127.0.0.1:4174/bankbi-kompass/
pause
exit /b 1
