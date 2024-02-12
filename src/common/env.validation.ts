import * as Joi from 'joi';

export const EnvValidationSchema = Joi.object({
  PORT: Joi.number()
    .default('3000')
    .port()
    .description('The port the server should listen on'),
  AUTH_BEARER_SHA256_KEY: Joi.string()
    .required()
    .description('SHA256 encrypted token used to authenticate with Bearer'),
  GLISTE_API_KEY: Joi.string()
    .required()
    .description('API key for "Getränkeliste App"'),
  GLISTE_API_ACCOUNT: Joi.string()
    .email()
    .required()
    .description('E-Mail of "Getränkeliste App" Account'),
  FLOOR_CONTRIBUTION: Joi.string()
    .required()
    .description('Amount of monthly added floor contribution in euro'),
  E401: Joi.string().required().description('Id of Gliste-account E401'),
  E402: Joi.string().required().description('Id of Gliste-account E402'),
  E403: Joi.string().required().description('Id of Gliste-account E403'),
  E404: Joi.string().required().description('Id of Gliste-account E404'),
  E405: Joi.string().required().description('Id of Gliste-account E405'),
  E406: Joi.string().required().description('Id of Gliste-account E406'),
  E407: Joi.string().required().description('Id of Gliste-account E407'),
  E408: Joi.string().required().description('Id of Gliste-account E408'),
  E409: Joi.string().required().description('Id of Gliste-account E409'),
  E410: Joi.string().required().description('Id of Gliste-account E410'),
  E411: Joi.string().required().description('Id of Gliste-account E411'),
  E412: Joi.string().required().description('Id of Gliste-account E412'),
  E413: Joi.string().required().description('Id of Gliste-account E413'),
});
