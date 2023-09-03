const express = require('express');
const app = express();
const fs = require('fs');

// Configuração do middleware para análise de corpo JSON
app.use(express.json());

// Endpoint para obter a lista de produtos a partir do arquivo JSON
app.get('/produtos', (req, res) => {
  try {
    const produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao ler o arquivo de produtos:', error);
    res.status(500).json({ error: 'Erro ao obter os produtos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
