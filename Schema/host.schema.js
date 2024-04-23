const Joi = require("joi");
const  regex  = require("../helper/regex");

UserSchema = Joi.object({
    // username: Joi.string().min(3).required() 3520143126491,
    dateOfBirth: Joi.string().min(8).max(10).required(),
    cnic: Joi.string().max(13).required(),
    city: Joi.string().required(),
})

module.exports = UserSchema




