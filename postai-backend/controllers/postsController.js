const pool = require('../db');

exports.getAllPosts = async (req, res) => {
  const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
  res.json(result.rows);
};

exports.createPost = async (req, res) => {
  const { tema, conteudo, status, data_agendada } = req.body;
  const result = await pool.query(
    'INSERT INTO posts (tema, conteudo, status, data_agendada) VALUES ($1, $2, $3, $4) RETURNING *',
    [tema, conteudo, status, data_agendada]
  );
  res.status(201).json(result.rows[0]);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { tema, conteudo, status, data_agendada } = req.body;
  const result = await pool.query(
    'UPDATE posts SET tema=$1, conteudo=$2, status=$3, data_agendada=$4 WHERE id=$5 RETURNING *',
    [tema, conteudo, status, data_agendada, id]
  );
  res.json(result.rows[0]);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM posts WHERE id=$1', [id]);
  res.status(204).send();
};
