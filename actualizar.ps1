param([string]$zip="$env:USERPROFILE\Downloads\micompra-rappi-v2-invitado.zip")
Write-Host "Actualizando MiCompra..." -ForegroundColor Green
Set-Location "C:\Users\HP\Desktop\Desarrollo\proyecto"
# Detener procesos de node si existen (opcional)
# Remove-Item -Recurse -Force src -ErrorAction SilentlyContinue
Expand-Archive -Path $zip -DestinationPath . -Force
npm install
git add .
git commit -m "update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push
Write-Host "Listo. Ejecutando servidor..." -ForegroundColor Green
npm run dev -- --host
