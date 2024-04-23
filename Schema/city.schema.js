const Joi = require("joi");

CityScheema = Joi.object({
    cityName:Joi.string().required(),
    countryName:Joi.string().required(),
    isAllowed:Joi.number()
})


module.exports = CityScheema;