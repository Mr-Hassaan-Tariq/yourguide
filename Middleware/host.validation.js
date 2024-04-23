
const regex = require('../helper/regex')
const hostScheema = require('../Schema/host.schema')

class UserValidation{
    checkUserValidation = (req,res,next)=>{

         
        const error = hostScheema.validate(req.body).error;
        if(error){
            res.status(500).send({
                status:false,
                code:500,
                message:'fields are required.',
                error
            })
        }else{
            next()
        }
        
        // res.status(200).send()
    
        // UserSchema.validate()
    }

    loginValidation = (req,res,next)=>{
        
    }
}

module.exports = new UserValidation;