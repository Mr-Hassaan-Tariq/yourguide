const { Op, where } = require("sequelize");
const {services} = require("../Models/ServicesModel");

class serviceBusiness {
    addService = async (name) => {
        try {
            const result = await services.create({ name })
            return result;
        } catch (error) {
            console.log('error is', error)
            return false
        }

    }

    getService = async()=>{

    }
    findService = async (query) => {

        try {
            const result = await services.findAll({
                where: {
                    [Op.and]: [query, {
                        isAllowed: 1
                    }]
                },
                raw:true
            }
            )

            return result
        } catch (error) {

            return []

        }

    }


}

module.exports = new serviceBusiness;