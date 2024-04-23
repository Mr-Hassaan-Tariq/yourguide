const OtpScheema = require('../Schema/otp.scheema')
class OTPValidation{
    validateData = (req,res,next)=>{


        console.log('body ',req.body)
        const error = OtpScheema.validate(req.body).error
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