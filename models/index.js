const { sequelize } = require('../config/database');

const syncDatabase = async () => {
  await sequelize.sync({ force: true }); // force: true for testing, drops and recreates tables
};

module.exports = { syncDatabase }; 