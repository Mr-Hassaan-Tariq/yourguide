
const ArticleSchema = require('../Schema/article.schema')
const articleValidation = (req, res, next) => {

    console.log('body si ',req.body)
    const error = ArticleSchema.validate(req.body).error;

    if (error) {
        res.status(500).send({
            status: false,
            code: 500,
            error,
            message:"Fields are required."
        })
    } else {
        next()
    }
}


module.exports = { articleValidation }