require('dotenv').config();
const axios = require('axios');
const cityBusiness = require('../Business/city.business');
const city = require('../Models/CityModel');

class cityController {

    getMapDataBySearch = async (req, res, next) => {
        const { query } = req.query;
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${process.env.API_KEY}`;
        try {
            const response = await axios.get(apiUrl);
            const results = response.data.results;
            res.status(200).send({
                status: true,
                code: 200,
                data: results
            });
        } catch (error) {
            console.error('An error occurred while fetching data from the API:', error);
            res.status(500).send({
                status: false,
                code: 500,
                message: 'An error occurred while fetching data from the API.'
            });
        }
    }


    getCitiesByCountryName = async (req, res, next) => {

        var config = {
            method: 'get',
            url: 'https://api.countrystatecity.in/v1/countries/Pk/cities',
            headers: {
                'X-CSCAPI-KEY': process.env.COUNTRY_STATE_CITY_API
            }
        };

        axios(config)
            .then(function (response) {
                res.status(200).send({
                    status:true,
                    code:200,
                    data:response.data});
            })
            .catch(function (error) {
                console.log(error);
                res.status(500).send({status:false,
                    code:500,
                    message:'An error occurred while fetching data from the API.'});
            });
    }

    addCity = async (req, res, next) => {
        try {
            if ((await cityBusiness.findCity(req.body.cityName)).length < 1) {
                const result = await city.create({
                    name: req.body.cityName,
                    country: req.body.countryName
                })

                res.status(200).send({
                    status: true,
                    code: 200,
                    message: 'City is added'
                })

            } else {
                res.status(500).send({
                    status: false,
                    code: 500,
                    message: "City already exist."
                })

            }
        } catch (error) {
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error occure in our side."

            })
        }
    }

    geCity = async(req,res,next)=>{
        try {
            
            const result = await cityBusiness.getAllCity();
            if(result.length > 0){
                res.status(200).send({
                    status:true,
                    code:200,
                    data:result
                })
            }else{
                res.status(404).send({
                    status:false,
                    code:404,
                    message:"No city is found."
                })
            }
        } catch (error) {
            
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error occure in our side."

            })
        }
    }


}

module.exports = new cityController;