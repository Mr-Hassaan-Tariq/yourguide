const Joi = require("joi");
const  regex  = require("../helper/regex");

UserSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    // username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    bio: Joi.string(),
    userImg: Joi.string(),
    // dateOfBirth: Joi.string().min(8).max(10).required(),
    phoneNo: Joi.string().min(11).max(13).pattern(/^(0|\+92)\d{10}$/),
    isActive:Joi.number(),
    role:Joi.number(),
    gender:Joi.number().required(),
    password:Joi.string().required(),
    isBlock:Joi.number()
})

module.exports = UserSchema




