const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  url: Sequelize.STRING,
});

module.exports = Image;
