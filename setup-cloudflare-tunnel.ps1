# Script para configurar Cloudflare Tunnel - Hub Feed
# Execute cada comando em sequência

# 1. Instalar cloudflared (se ainda não tiver)
# winget install --id Cloudflare.cloudflared

# 2. Fazer login
# cloudflared tunnel login

# 3. Criar o tunnel
# cloudflared tunnel create hubfeed

# 4. Anotar o TUNNEL-ID que aparecer e substituir no config.yml

# 5. Configurar DNS
# cloudflared tunnel route dns hubfeed hubfeed.online
# cloudflared tunnel route dns hubfeed www.hubfeed.online

# 6. Iniciar o tunnel (use um dos comandos abaixo)

# Opção 1: Tunnel rápido (sem config)
# cloudflared tunnel --url http://localhost:5954

# Opção 2: Tunnel com configuração (copie o config.yml para C:\Users\redac\.cloudflared\)
# cloudflared tunnel run hubfeed

# 7. Instalar como serviço Windows (opcional - para rodar sempre)
# cloudflared service install
# cloudflared service start

Write-Host "Cloudflare Tunnel configurado para hubfeed.online!" -ForegroundColor Green
Write-Host "Seu site estará disponível em: https://hubfeed.online" -ForegroundColor Cyan
