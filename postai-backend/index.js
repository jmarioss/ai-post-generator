const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

const generateRoute = require('./routes/generate');
const postsRoute = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/generate', generateRoute);
app.use('/posts', postsRoute);

const PORT = 3001;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao PostgreSQL com sucesso.');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.error('Erro na conexão com o banco de dados:', err));

