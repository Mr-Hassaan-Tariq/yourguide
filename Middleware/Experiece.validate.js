const ExperienceScheema = require('../Schema/experience.schema')
class ExperienceValidater {
    addExperiece = (req, res, next) => {

        req.body.daysData && (req.body.daysData = JSON.parse(req.body.daysData));
        req.body.includes && (req.body.includes = JSON.parse(req.body.includes));
        req.body.exclude && (req.body.exclude = JSON.parse(req.body.exclude));
        // return;
        const error = req.body.days == req.body.daysData.length ? ExperienceScheema.validate(req.body).error:true;
        if (error) {
            res.status(500).send({
                status: false,
                code: 500,
                message: "You may enter invalid data.",
                error: error.details
            })
        } else {
            next();
        }
    }
}

module.exports = new ExperienceValidater;