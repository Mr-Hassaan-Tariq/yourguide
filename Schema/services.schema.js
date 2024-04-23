const Joi = require("joi");

ServiceSchema = Joi.object({
    name:Joi.string().required(),
})


module.exports = ServiceSchema;