const { Op } = require("sequelize");
const city = require("../Models/CityModel");

class CityBusiness{

    findCity = async (cityName) => {
        const result = await city.findAll({
            where: {
                [Op.or]: [
                    
                    { name: cityName },
                ],
                [Op.and]:[
                    {isAllowed:1}
                ]
            }
        });
            return result
    }
    getAllCity = async()=>{
        const result = await city.findAll({
            where: {
                [Op.and]:[
                    {isAllowed:1}
                ]
            },
            attributes:[
                'id',
                'name',
                'country'
            ]
        });


        return result;
    }
}

module.exports = new CityBusiness;