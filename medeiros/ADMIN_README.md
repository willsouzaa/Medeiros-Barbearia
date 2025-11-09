Admin Panel — Instruções rápidas

Visão geral
Este projeto possui um servidor Express simples (API de imagens) e um frontend React. O painel admin permite enviar imagens, editar metadados, substituir arquivos estáticos (com backup) e restaurar backups.

Pré-requisitos
- Node.js (recomendo v18+)
- npm

Local do projeto (exemplo):
C:\Users\paulo\Desktop\Clientes\Barbearia Medeiros\Medeiros-Barbearia\medeiros

Instalação
Abra PowerShell na pasta do projeto e rode:

```powershell
cd 'C:\Users\paulo\Desktop\Clientes\Barbearia Medeiros\Medeiros-Barbearia\medeiros'
npm install
```

Configurar token admin
O servidor espera o header `x-admin-token` para endpoints que modificam arquivos. Por padrão o valor é `changeme`. Recomendado alterar via variável de ambiente:

PowerShell (sessão atual):
```powershell
$env:ADMIN_TOKEN = 'seu_token_secreto'
```
Para persistir entre sessões (seta permanente):
```powershell
setx ADMIN_TOKEN "seu_token_secreto"
# abra uma nova janela do PowerShell para ter a variável disponível
```

Rodando os servidores
- Apenas backend (API):
```powershell
npm run start:server
# backend: http://localhost:4000
```
- Apenas frontend (React dev server):
```powershell
npm start
# frontend: http://localhost:3000
```
- Ambos ao mesmo tempo:
```powershell
npm run start:all
```

Testes rápidos
- Verificar targets estáticos:
```powershell
Invoke-RestMethod 'http://localhost:4000/api/targets' | ConvertTo-Json
```
- Upload via curl (PowerShell):
```powershell
curl -X POST 'http://localhost:4000/api/images/jardin-eldorado' `
  -H "x-admin-token: seu_token_secreto" `
  -F "image=@C:\caminho\para\arquivo.jpg" `
  -F "description=Teste" `
  -F "page=home" `
  -F "slot=main" `
  -F "order=0"
```

Onde os uploads são salvos
- `public/uploads/jardin-eldorado`
- `public/uploads/pagani`
Cada pasta terá um `meta.json` com as meta-informações (descrição/page/slot/order).

Substituição de arquivos estáticos
- O endpoint `/api/targets/:id/replace` cria um backup em `server_backups/` e escreve o novo arquivo em `src/...`.
- Restaurar backups é feito por `/api/backups` e `/api/backups/restore`.

Notas para deploy no Hostinger
- Em produção, prefira servir imagens dinâmicas a partir de `public/uploads` para evitar tocar em `src`.
- Configure o `ADMIN_TOKEN` como variável de ambiente na hospedagem.
- Garanta permissão de escrita no diretório `public/uploads` e `server_backups`.

Problemas comuns
- Erros do ESLint (no dev server): corrija no código ou rode `SKIP_PREFLIGHT_CHECK=true npm start` (apenas como último recurso).
- Se alterações em `src` (substituição estática) não aparecem, reinicie o servidor frontend.

Contato
Se quiser, posso adicionar um `/admin` route temporário para acessar o painel diretamente, ou automatizar a restauração de metadados.
