const express = require('express');
const router = express.Router();
const axios = require('axios');

const ARCEE_API_KEY = '4JXb0COChR8TlI50wETq3k6CkfRSzoOVtFtdAvAWO9TRouwX-8GyJhTJzN2Mn5mR3KFTZNyvzJmvkCrIKooIah0PgDk'; // substitua pela sua key real

router.post('/', async (req, res) => {
  const { tema } = req.body;

  if (!tema) {
    return res.status(400).json({ error: 'Tema é obrigatório.' });
  }

  try {
    const response = await axios.post('https://models.arcee.ai/v1/chat/completions', {
      model: 'auto', // ou 'gpt-3.5-turbo' se quiser fixar
      messages: [
        { role: 'user', content: `Escreva um post com eventos recentes sobre: ${tema}` }
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${ARCEE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const conteudo = response.data.choices?.[0]?.message?.content;

    console.log('Resposta da Arcee:', response.data);
    res.json({ conteudo });
  } catch (err) {
    console.error('Erro na requisição à Arcee:', err.response?.data || err.message);
    res.status(500).json({ error: 'Erro ao gerar conteúdo com a Arcee.' });
  }
});

module.exports = router;






/*
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  const { tema } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Crie uma postagem com base no tema: ${tema}` }],
    });
    res.json({ conteudo: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

key 4JXb0COChR8TlI50wETq3k6CkfRSzoOVtFtdAvAWO9TRouwX-8GyJhTJzN2Mn5mR3KFTZNyvzJmvkCrIKooIah0PgDk
*/
