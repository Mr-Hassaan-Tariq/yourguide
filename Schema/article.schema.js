const Joi = require("joi");

ArticleSchema = Joi.object({
    blogTitle:Joi.string().required(),
    blogCity:Joi.string().required(),
    catagory:Joi.string().required(),
    blogData:Joi.string().required().min(50)
})


module.exports = ArticleSchema;