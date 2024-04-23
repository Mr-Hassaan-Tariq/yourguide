const Joi = require("joi");

OtpScheema = Joi.object({
    email:Joi.string().email().required(),
    otp:Joi.number().required(),
    otpCode:Joi.number().required(),
})


module.exports = OtpScheema;