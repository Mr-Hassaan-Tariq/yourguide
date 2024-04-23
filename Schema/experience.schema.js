const Joi = require("joi");
const regex = require("../helper/regex");

ExperienceSchema = Joi.object({
  title: Joi.string().required().min(5),
  startFrom: Joi.string().required().min(5),
  endFrom: Joi.string().required().min(5),
  language: Joi.string().required().min(3),
  travelFrom: Joi.string().required().min(2),
  travelTo: Joi.string().required().min(2),
  description: Joi.string().required(),
  days: Joi.number().required(),
  amount: Joi.number().required(),
  groupSize: Joi.number().required(),
  daysData: Joi.array()
    .items(
      Joi.object({
        day: Joi.number().required(),
        description: Joi.string().required(),
      })
    )
    .required(),
    
  includes: Joi.array().items(Joi.number().integer().min(0)).min(1).required(),
  exclude: Joi.array().items(Joi.number().integer().min(0)).min(1).required(),
});

module.exports = ExperienceSchema;
