const Joi = require("joi");

PaymentSchema = Joi.object({
    email:Joi.string().email().required(),
    title:Joi.string().required(),
    amount:Joi.number().required(),
    total:Joi.number().required().min(1),
    tourId:Joi.number().required(),
    userId:Joi.number().required()
})


module.exports = PaymentSchema;