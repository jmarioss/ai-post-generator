const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('Post', {
  tema: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'rascunho',
  },
  data_agendada: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'posts',
  timestamps: false,
});

module.exports = Post;
