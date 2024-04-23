const ContactSchema = require('../Schema/contact.schema')
class contactValidation{
    addContact = (req,res,next)=>{


        const error = ContactSchema.validate(req.body).error;
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
    updateContact = (req,res,next)=>{


        console.log('response is ',req.body)
        const error = !req.body.response;
        console.log('erros is ',error)
        if(error){
            res.status(500).send({
                status:false,
                code:500,
                message:"You may enter invalid data."
            })
        }else{
            next();
        }
    }
}

module.exports = new contactValidation;