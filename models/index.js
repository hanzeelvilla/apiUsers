const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});


const User = require('./users')(sequelize, DataTypes);

const db = {
  sequelize,
  User,
};


module.exports = db