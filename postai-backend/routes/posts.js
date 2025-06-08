const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Criar novo post
router.post('/', async (req, res) => {
  const { tema, conteudo, status, data_agendada } = req.body;
  try {
    const post = await Post.create({ tema, conteudo, status, data_agendada });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar post.' });
  }
});

// Listar todos os posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ order: [['id', 'DESC']] });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar posts.' });
  }
});

// Atualizar post
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: 'Post não encontrado.' });

    await post.update(req.body);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar post.' });
  }
});

// Deletar post
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Post não encontrado.' });

    res.json({ message: 'Post deletado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar post.' });
  }
});

module.exports = router;
