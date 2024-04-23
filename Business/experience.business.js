const { Experience, ExperienceDetail, experienceDay, Images } = require("../Models/ExperienceModel");
const UserModel = require("../Models/UserModel");
const { servicesInclude, servicesExclude, services } = require('../Models/ServicesModel')

class ExperienceBusiness {


    addExperience = async (user, data) => {
        try {
            const result = await Experience.create({
                userId: user.data.id,
                title: data.title,
                startFrom: data.startFrom,
                endFrom: data.endFrom,
                days: data.days,
                language: data.language,
                amount: data.amount,
                groupSize: data.groupSize,
                travelFrom: data.travelFrom,
                travelTo: data.travelTo
            })

            if (result) {

                const experienceDesc = await ExperienceDetail.create({
                    experienceId: result.dataValues.experienceId,
                    description: data.description
                })


                for (let i = 0; i < data.daysData.length; i++) {
                    data.daysData[i].experienceId = result.dataValues.experienceId
                }
                const days = await experienceDay.bulkCreate(data.daysData)

                let includes = []
                for (let i = 0; i < data.includes.length; i++) {

                    includes.push({
                        experienceId: result.dataValues.experienceId,
                        serviceId: data.includes[i]
                    })
                }

                let exclude = [];
                for (let i = 0; i < data.exclude.length; i++) {
                    exclude.push({
                        experienceId: result.dataValues.experienceId,
                        serviceId: data.exclude[i]
                    })
                }
                let imgPath = [];
                for (let i = 0; i < user.imgUrl.length; i++) {
                    imgPath.push({
                        experienceId: result.dataValues.experienceId,
                        imgLink: user.imgUrl[i]
                    })
                }

                const includesAdded = await servicesInclude.bulkCreate(includes);
                const excludeAdded = await servicesExclude.bulkCreate(exclude);
                const imgAdd = await Images.bulkCreate(imgPath);

                return true;

            }
            else
                return false
        } catch (error) {
            console.log("error is ", error)
            return false;
        }
    }

    getExperience = async (param) => {

        try {
            const response = await Experience.findAll({
                where: [
                    param
                ],
                include: [{
                    model: ExperienceDetail,
                    required: true,
                    attributes: ['description', 'id', 'createdAt']
                }, {
                    model: UserModel,
                    required: true,
                    attributes: ['firstName', 'lastName', 'id', 'createdAt',['bio','about'],'email','userImg']
                }, {
                    model: experienceDay,
                    required: true,
                    attributes: ['description', 'day', 'id']
                },
                {
                    model: servicesInclude,
                    required: true,
                    include: {
                        model: services,
                        required: true,
                    },
                    attributes: ['serviceId', 'id']
                }, {
                    model: servicesExclude,
                    required: true,
                    include: {
                        model: services,
                        required: true,
                    },
                    attributes: ['serviceId', 'id']
                }, {
                    model: Images,
                    required: true,
                    attributes: ['imgLink']

                },
                ]
            });

            // console.log('response is ',response);
            return response;

        } catch (error) {
            console.log('error is', error)
            return [];
        }
    }

    getAllExperience = async (param ,user = false) => {

        try {
            param.isActive = 1;
            // if(!user){
            //     param.forApproval = 0
            // }
            const response = await Experience.findAll({
                where: param
                ,
                include: [{
                    model: UserModel,
                    required: true,
                    attributes: ['firstName', 'lastName', 'id', 'createdAt']
                }, {
                    model: Images,
                    required: true,
                    attributes: ['imgLink']

                },
                ],
            });

            return response;

        } catch (error) {
            console.log('error is', error)
            return [];
        }
    }







    getExperienceCount = async () => {
        try {

            let obj = {
                totalExperience:await Experience.count({where:{isActive:1}}),
                pendingExperience:await Experience.count({where:{isActive:1,forapproval:1}})
            };

            return obj;
            
        } catch (error) {
            console.log('erroir is ',error)
            return {};

        }
    }
}


module.exports =
    new ExperienceBusiness;