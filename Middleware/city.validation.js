const CityScheema = require('../Schema/city.schema')
class cityValidation{
    addCity = (req,res,next)=>{


        const error = CityScheema.validate(req.body).error;
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

module.exports = new cityValidation;