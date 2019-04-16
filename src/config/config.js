var joi = require("joi");

require('dotenv').config();

var envVars = joi.object({
    NODE_ENV: joi.string().allow(['development', 'production', 'test']).default('development'),
    PORT: joi.number().default(4040),
    JWT_SECRET: joi.string().required().description('JWT Secret required to sign.'),
    MONGO_HOST: joi.string().required().description('Mongo DB host url'),
    MONGO_PORT: joi.number().default(27017),
    MONGO_DB: joi.string().default('xyinc'),
}).unknown().required;

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwtSecret: envVars.JWT_SECRET,
    mongo: {
      db: envVars.MONGO_DB,
      host: envVars.MONGO_HOST,
      port: envVars.MONGO_PORT,
    },
  };
  
module.exports = config;