
const regex = require('../helper/regex')
const UserSchema = require('../Schema/User.schema')

class UserValidation{
    checkUserValidation = (req,res,next)=>{

         
        const error = UserSchema.validate(req.body).error;
        console.log('error is',error)
        if(error){
            res.status(500).send({
                status:false,
                code:500,
                message:'fields are required.'
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