const Joi = require("joi");

ContactScheema = Joi.object({
    email:Joi.string().email().required(),
    name:Joi.string().required(),
    description:Joi.string().required(),
})


module.exports = ContactScheema;