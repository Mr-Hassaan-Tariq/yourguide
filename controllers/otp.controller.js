const UserBussiness = require("../Business/User.bussiness");
const otpBusiness = require("../Business/otp.business");
const OtpModal = require("../Models/OTPModel");


class OTPController {

    getOtp = (email) => {

        return otpBusiness.generateOTP(email)

    }

    verifyOtp = async (req, res) => {

        try {

            console.log('otp is ',req.body)
            const result = await otpBusiness.findOtp(req.body)
            console.log("result is ",result)
            if (result) {
                if (result.otpNumber == req.body.otp) {

                    const data = await UserBussiness.verifyUser(req.body.email)

                    if (data) {
                        res.status(200).send({
                            status: true,
                            code: 200,
                            message: "User is varified."
                        })
                    }else{
                        res.status(401).send({
                            status: false,
                            code: 401,
                            message: "The email is not exist."
                        })

                    }

                } else {
                    res.status(401).send({
                        status: false,
                        code: 401,
                        message: "The OTP is mis-matched."
                    })
                }
            } else {
                res.status(404).send({
                    status: false,
                    code: 404,
                    message: "The OTP with the id is invalid."
                })
            }

        } catch (error) {
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error in our side."
            })
        }
    }



}


module.exports = new OTPController;