# BarbeariaMedeiros

Bem-vindo ao  BarbeariaMedeiros, um aplicativo web dedicado a fornecer uma experiência excepcional de cuidados com cabelo e barba. Este projeto foi desenvolvido utilizando React e tem como objetivo facilitar o agendamento de serviços de barbearia e apresentar a equipe e os serviços oferecidos.


## Tecnologias Utilizadas


## Painel Admin de Imagens (local)

Existe um servidor simples em `server/index.js` para gerenciar imagens sem banco de dados.

- As imagens são salvas em `public/uploads/jardin-eldorado` e `public/uploads/pagani`.
- Metadata (descrição) é salva em `meta.json` junto às imagens.

Para rodar localmente:

1. Instale dependências do frontend (se ainda não):

```
npm install
```

2. Instale dependências do servidor (uma vez):

```
npm install express multer cors concurrently --save-dev
```

3. Rode o servidor de imagens e o app React (duas janelas ou `npm run start:all`):

```
npm run start:server
npm start
```

Abra `http://localhost:3000` para o app e `http://localhost:4000` é a API.

## Deploy no Hostinger (resumo)

Opções comuns para hospedar frontend + backend no Hostinger:

- Hostinger com suporte a Node.js (Plano VPS ou Cloud com Node): você pode subir o servidor Express (`server/index.js`) e o build do React juntos. Passos gerais:
   1. Gere o build do React: `npm run build` — isso criará a pasta `build`.
   2. No servidor Hostinger com Node, faça um deploy do código (incluindo `server/index.js` e `build/`). Ajuste o servidor para servir os arquivos estáticos do React: `app.use(express.static(path.join(__dirname,'build')))` e rote para `build/index.html` para rotas não-API.
   3. Inicie o servidor Node (por exemplo usando PM2) apontando para `server/index.js`.

- Hostinger sem Node (hospedagem compartilhada estática): coloque apenas o build do React em `public_html` e hospede a API em outro serviço (Heroku, Railway, Vercel Serverless, DigitalOcean App, ou um VPS). Nesse caso altere o AdminPanel para apontar para a URL da API remota.

Notas importantes:
- Backup: quando um administrador excluir uma imagem, ela será permanentemente removida da pasta. Considere backups regulares.
- Segurança: proteja o painel admin com autenticação antes de colocar em produção.
- Caminhos: em produção use URLs relativos/configuráveis em vez de hardcoded `http://localhost:4000`.

## Funcionalidades


## Instalação

Para instalar e executar este projeto localmente, siga as etapas abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/willsouzaa/Medeiros-Barbearia.git

Navegue até o diretório do projeto:cd medeiros

Instale as dependências: npm install

Inicie o servidor de desenvolvimento: npm start

Estrutura do Projeto

SMBarber/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── componentes/
│   │   ├── home.js
│   │   ├── equipe.js
│   │   ├── contatos.js
│   │   └── imagens/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
└── README.md

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue.

Licença
Este projeto está licenciado sob a MIT License.

Contato
Se você tiver alguma dúvida ou sugestão, entre em contato:

Nome: Will
Email: Pauloamancio79@gmail.com
WhatsApp: +55 48 98840-5365


### Instruções
- **Personalize os detalhes**: Certifique-se de ajustar os links, e-mail, e qualquer informação que seja relevante ao seu projeto.
- **Demonstração**: Adicione um link real para uma demonstração do seu aplicativo, se houver.
- **Contribuições**: Se você estiver aberto a contribuições, considere adicionar diretrizes específicas.

Sinta-se à vontade para fazer qualquer alteração ou adição que achar necessária!
