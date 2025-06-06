# Aurora Backend

Este é o backend da aplicação Aurora, responsável por fornecer dados de auroras boreais para o frontend.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Axios para requisições HTTP

## Configuração

1. Clone este repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Crie um arquivo `.env` com as seguintes variáveis:
   ```
   PORT=3001
   NODE_ENV=production
   ```
4. Inicie o servidor:
   ```
   npm start
   ```

## Endpoints da API

- `GET /` - Verifica se a API está funcionando
- `GET /api/aurora-data` - Retorna os dados mais recentes de auroras boreais da NOAA

## Deploy no Render

Este backend está configurado para ser facilmente implantado no Render:

1. Conecte seu repositório GitHub ao Render
2. Crie um novo Web Service com as seguintes configurações:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node.js

## Variáveis de Ambiente para Produção

No Render, configure as seguintes variáveis de ambiente:

- `NODE_ENV=production`