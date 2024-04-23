
const PaymentSchema = require('../Schema/payment.schema')
const PaymentValidation = (req, res, next) => {

    const error = PaymentSchema.validate(req.body).error;

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


module.exports = { PaymentValidation }