const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração de CORS para permitir requisições do frontend
app.use(cors({
  origin: ['https://aurora-app.netlify.app', 'https://aurora-s2vr.onrender.com']
}));

// Middleware para processar JSON
app.use(express.json());

// Rota para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.json({ message: 'API Aurora funcionando!' });
});

// Rota para buscar dados da API da NOAA
app.get('/api/aurora-data', async (req, res) => {
  try {
    const response = await axios.get('https://services.swpc.noaa.gov/json/ovation_aurora_latest.json');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    res.status(500).json({ error: 'Falha ao carregar dados da API' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});