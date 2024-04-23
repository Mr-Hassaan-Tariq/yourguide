const ServiceSchema = require('../Schema/services.schema')
class OTPValidation{
    validateData = (req,res,next)=>{


        const error = ServiceSchema.validate(req.body).error
        if(error){
            res.status(500).send({
                status:false,
                code:500,
                message:"You may enter invalid data.",
                error
            })
        }else{
            next();
        }
    }
}

module.exports = new OTPValidation;