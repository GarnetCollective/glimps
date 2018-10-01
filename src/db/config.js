const {
  NODE_ENV,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE
} = process.env;

const config = {
  development: {
    username: "",
    password: "",
    database: "glimps",
    storage: "./glimps.sqlite",
    dialect: "sqlite",
    host: "localhost"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: "",
    password: "",
    database: "glimps",
    storage: "./glimps.sqlite",
    dialect: "sqlite",
    host: "localhost"
  }
};

module.exports = config[NODE_ENV];
