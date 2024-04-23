const { Op } = require("sequelize");
const PaymentModel = require("../Models/PaymentModel")
const UserModel = require("../Models/UserModel")
const {Experience} = require("../Models/ExperienceModel")
class PaymentBusiness {
    
    addPayment = async (obj) => {

        try {
            const result = await PaymentModel.create({
                amount:obj.amount,
                quantity:obj.quantity,
                userId:obj.userId,
                experienceId:obj.tourId
            })

            if (result) {
                return result
            } else {

                return ''
            }


        } catch (error) {

            console.log('error is ',error)
            return '';
        }
    }

    findPayment = async (param={}) => {

        param.isActive = 1
        try {
            const result = await PaymentModel.findAll(
                {where:param,
                    include:[
                        {
                            model: UserModel,
                            required: true,
                            attributes: ['firstName', 'lastName', 'id', 'createdAt','email']
                        }, {
                            model: Experience,
                            required: true,
                        },
                    ]
                });

            if (result) {
                return result
            } else {

                return ''
            }


        } catch (error) {

            console.log('error is ',error)
            return '';
        }
    }

    updatePayment = async (id,param={}) => {

        try {
            const result = await PaymentModel.update(param,
                {where:[
                    {isActive:1},
                    {PaymentId:id}
                ]
            });

            if (result) {
                return result
            } else {

                return ''
            }


        } catch (error) {

            console.log('error is ',error)
            return '';
        }
    }


    StoreOtp = () => {

    }

}

module.exports = new PaymentBusiness;