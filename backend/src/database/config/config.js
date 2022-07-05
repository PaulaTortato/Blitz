require('dotenv').config();

const environment = process.env.NODE_ENV || 'test';

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'app_blitzDb',
  port: process.env.MYSQL_PORT || '3306',
  database:
    `${process.env.MYSQL_DB_NAME || 'blitz-api'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  dialect: 'mysql',
  // Referência para ajustar a timezone: https://stackoverflow.com/questions/52096692/change-sequelize-timezone
  timezone: '-03:00',
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
