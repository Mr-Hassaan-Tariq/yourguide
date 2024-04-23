const experienceBusiness = require("../Business/experience.business");

class ExperienceController {
    allowedParams = ['userId', 'language', 'createdAt','amount','days','startFrom','endFrom','travelFrom','travelTo'];

    addExperiece = async (req, res) => {
        const files = req.files;
        // console.log('req',req.body.daysData);
        // return;
        const result = await experienceBusiness.addExperience(req.user, req.body);
        // console.log("result is", result)
        if (result) {

            res.status(200).send({
                code: 200,
                status: true,
                message: "experience is added."
            })
        } else {

            res.status(500).send({
                code: 500,
                status: false,
                message: "experience is not added."
            })
        }
    }
    getExperience = async (req, res) => {

        const queryParams = Object.keys(req.query);
        const isAllowed = queryParams.every(param => this.allowedParams.includes(param));
        if (!isAllowed) {
            return res.status(400).json({
                status: false,
                code: 400,
                message: 'Invalid query parameters'
            });
        } else {
            const result = await experienceBusiness.getAllExperience(req.query
                // ,queryParams.includes('userId') || req.user.data.role == 3?true:false
                )
            res.status(200).send({
                code: 200,
                status: true,
                data: result
            })
        }
        // const result = await experienceBusiness.addExperience(req.user.data,req.body);
        // console.log("result is",result)
    }
    getExperienceCount = async (req, res) => {

        if(req.user.auth == true && req.user.data.role == 3){
            const result = await experienceBusiness.getExperienceCount()
            res.status(200).send({
                code: 200,
                status: true,
                data: result
            })
        }else{
            res.status(401).send({
                status:false,
                code:401,
                message:"You are not allowed to access the data."
            })
        }
        // const result = await experienceBusiness.addExperience(req.user.data,req.body);
        // console.log("result is",result)
    }


    getExperienceById = async (req, res) => {

        if (!req.params.experienceId) {
            return res.status(400).json({
                status: false,
                code: 400,
                message: 'Invalid query parameters'
            });
        } else {
            const result = await experienceBusiness.getExperience({experienceId:req.params.experienceId})
            res.status(200).send({
                code: 200,
                status: true,
                data: result
            })
        }
        // const result = await experienceBusiness.addExperience(req.user.data,req.body);
        // console.log("result is",result)
    }
}

module.exports = new ExperienceController;