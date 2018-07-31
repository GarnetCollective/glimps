const Sequelize = require("sequelize");

import config from "./config";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    storage: config.storage,
    operatorsAliases: false,
    logging: false
  }
);

export { sequelize, Sequelize };
