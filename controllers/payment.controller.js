const PaymentBusiness = require("../Business/Payment.business");
const UserBussiness = require("../Business/User.bussiness");
const experienceBusiness = require("../Business/experience.business");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

class PaymentController {
  handlePayments = async (req, res, next) => {
    try {
      const { email, title, amount, total, tourId, userId } = req.body;

      const userResponse = await UserBussiness.findUser(email);
      if (userResponse.length == 1) {
        if (userResponse[0].id == userId) {
          const experienceResponse = await experienceBusiness.getAllExperience({
            experienceId: tourId,
          });

          if (
            experienceResponse.lenght != 0 &&
            experienceResponse[0]?.dataValues.experienceId == tourId
          ) {
            const response = await PaymentBusiness.addPayment({
              userId,
              tourId,
              amount,
              quantity: total,
            });
            if (response != "") {
              let data = {
                //make the data to identify the user from their username
                id: response.dataValues.PaymentId,
              };
              const authToken = jwt.sign(data, process.env.JWT_SECRATE, {
                expiresIn: "30m",
              });
              const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                line_items: [
                  {
                    price_data: {
                      currency: "pkr",
                      product_data: {
                        name: title.toString(),
                        description: `
                        During the checkout process, we will collect your billing information, including your name, billing address, and contact information. This information is necessary to process your payment and ensure accurate order fulfillment.`,
                      },
                      unit_amount: amount * 100,
                    },
                    quantity: total,
                  },
                ],
                customer_email: `${email}`,
                success_url:
                  process.env.FRONTEND_URL +
                  "/experience/confirm?token=" +
                  authToken,
                cancel_url: process.env.URL + "/experience/"+tourId,
              });

              res
                .status(200)
                .send({ status: true, code: 200, data: session.url });
            } else {
              res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error while add the payment.",
              });
            }
          } else {
            res.status(404).send({
              status: false,
              code: 404,
              message: "Tour is not found",
            });
          }
        } else {
          res.status(401).send({
            status: false,
            code: 401,
            message: "Email and user id is not matched.",
          });
        }
      } else {
        res
          .status(401)
          .send({ status: false, code: 401, message: "Unauthorize access" });
      }
    } catch (err) {
      console.log("error is ", err);
      res.status(500).send({ message: "Something went wrong" });
    }
  };

  getPayments = async (req, res, next) => {
    try {
      const response = await PaymentBusiness.findPayment(req.query);
      res.status(200).send({
        status: true,
        code: 200,
        data: response,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        code: 500,
        message: "There is some error from our side.",
      });
    }
  };

  verifyPayment = async (req, res, next) => {
    try {
      const data = await jwt.verify(
        req.body.token,
        process.env.JWT_SECRATE,
        (error, decoded) => {
          if (error) {
            return false;
          }
          if (decoded) {
            return decoded;
          }
        }
      );
      if (data != false) {
        const response = await PaymentBusiness.findPayment({
          PaymentId: data.id,
        });
        if (response.length != 0) {

          if(response[0].isSuccessfull != 1){
          const update = await PaymentBusiness.updatePayment(data.id, {
            isSuccessfull: 1,
          });
          if (update != "") {
            res.status(200).send({
              status: true,
              code: 200,
              data: response,
            });
          } else {
            res.status(500).send({
              status: false,
              code: 500,
              message: "There is some error from our side.",
            });
          }
        }else{
          res.status(200).send({
            status: true,
            code: 200,
            data:response
          });

        }

        } else {
          res.status(404).send({
            status: false,
            code: 404,
            message: "Payment record is not found",
          });
        }
      } else {
        res.status(401).send({
          status: false,
          code: 401,
          message: "Invalid token.",
        });
      }
    } catch (error) {
      console.log("error hhh is ", error);
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error from our side.",
      });
    }
  };
  handleOK = async (req, res) => {
    const clientIP = req.ip; // Get the client's IP address

    res.status(200).send({
      status: true,
      code: 200,
      message: clientIP,
    });
  };
  handleCancel = async (req, res) => {
    res.status(200).send({
      status: true,
      code: 200,
      message: "ok canceled",
    });
  };
}

module.exports = new PaymentController();
