const { Op } = require("sequelize");
const OtpModal = require("../Models/OTPModel");

class OTPBusiness {
    createOtp = () => {
        const min = 1000; // Minimum 4-digit number (inclusive)
        const max = 9999; // Maximum 4-digit number (inclusive)

        // Generate a random number between min and max
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        return randomNumber;
    }
    findOtp = async (obj) => {

        try {
            const result = await OtpModal.findOne({
                where: {
                    [Op.and]: [{
                        id: obj.otpCode,
                        email: obj.email

                    }]
                },
                attributes: [
                    'id', 'otpNumber'
                ]
            })

            if (result) {
                return result
            } else {

                return ''
            }


        } catch (error) {

        }
    }
    generateOTP = async (email) => {

        try {
            const otp = this.createOtp();


            const result = await OtpModal.create({ otpNumber: otp, email })

            if (result) {
                return {
                    id: result.dataValues.id,
                    code: otp
                }
            } else
                return ''

        } catch (error) {
            return ''
        }

    }


    StoreOtp = () => {

    }

}

module.exports = new OTPBusiness;