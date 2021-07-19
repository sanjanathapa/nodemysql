//Connection setup

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sequelizeDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize