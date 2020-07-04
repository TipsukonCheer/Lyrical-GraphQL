const dotenv = require('dotenv');

dotenv.config();

const config = {
  username:process.env.USERNAME,
  password:process.env.PASSWORD,
  database:process.env.DATABASE
};

module.exports = config;