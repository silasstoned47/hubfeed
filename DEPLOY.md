# Hub Feed - Guia de Deploy no EasyPanel

## 📋 Pré-requisitos
- Conta no EasyPanel
- Repositório Git (GitHub/GitLab) ou Docker configurado

## 🚀 Método 1: Deploy via Git (Recomendado)

### Passo 1: Preparar o Repositório
```bash
git init
git add .
git commit -m "Initial commit - Hub Feed"
git remote add origin <sua-url-do-repositorio>
git push -u origin main
```

### Passo 2: Configurar no EasyPanel
1. Acesse seu painel EasyPanel
2. Clique em **"Create Service"** → **"App"**
3. Selecione **"GitHub"** ou **"GitLab"**
4. Escolha o repositório `hubfeed`
5. Configure:
   - **Name:** hub-feed
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Port:** `3000`
   - **Environment:** Node.js 20

### Passo 3: Variáveis de Ambiente
```env
NODE_ENV=production
PORT=3000
```

## 🐳 Método 2: Deploy via Docker

### Passo 1: Build da Imagem
```bash
docker build -t hubfeed:latest .
```

### Passo 2: Testar Localmente
```bash
docker run -p 3000:3000 hubfeed:latest
```

### Passo 3: No EasyPanel
1. Clique em **"Create Service"** → **"App"**
2. Selecione **"Docker"**
3. Configure:
   - **Image:** hubfeed:latest
   - **Port:** 3000
   - **Environment:** production

## 📦 Método 3: Deploy Manual

### Arquivos Necessários:
- `.next/` (pasta completa após build)
- `public/` (imagens e assets)
- `node_modules/` (ou rode `npm install` no servidor)
- `package.json`
- `package-lock.json`

### Comandos no Servidor:
```bash
npm install --production
npm run build
npm run start
```

## ✅ Checklist Pré-Deploy

- [ ] Build local funcionando (`npm run build`)
- [ ] Todas as imagens em `public/products/`
- [ ] Variáveis de ambiente configuradas
- [ ] `.gitignore` atualizado
- [ ] `next.config.ts` com `output: 'standalone'` (para Docker)

## 🔧 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
npm run build
```

### Erro: "Port already in use"
Altere a porta no EasyPanel ou use:
```bash
PORT=5954 npm run start
```

### Imagens não carregam
Verifique se a pasta `public/` foi incluída no deploy.

## 📱 Domínio Personalizado

No EasyPanel:
1. Vá em **"Domains"**
2. Adicione `hubfeed.online`
3. Configure DNS:
   - Type: A
   - Name: @
   - Value: [IP do EasyPanel]

## 🎉 Deploy Concluído!

Seu site estará disponível em:
- URL do EasyPanel: `https://seu-app.easypanel.host`
- Domínio personalizado: `https://hubfeed.online`
