const serviceBusiness = require("../Business/service.business");

class service {

    addServices = async (req, res) => {
        let result = await serviceBusiness.findService({name:req.body.name});
        if (result.length != 0) {
            res.status(409).send({
                status: false,
                code: 409,
                message: "Dublicate name of service."
            })
        } else {
            result = await serviceBusiness.addService(req.body.name)
            if (result) {
                req.body.message =  "Service is added.";
                res.status(200).send({
                    status: true,
                    code: 200,
                    data: req.body
                })
            } else {
                res.status(500).send({
                    status: false,
                    code: 500,
                    message: "There is some error to add the service."
                })
            }
        }
    }

    getServices = async(req,res)=>{

        const result = await serviceBusiness.findService(req.query);
        // console.log('result is',result)
        if(result.length != 0){
            res.status(200).send({
                status:true,
                code:200,
                data:result
            })
        }else{

            res.status(404).send({
                status:false,
                code:404,
                data:[]
            })
        }

    }
}


module.exports = new service;