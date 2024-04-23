const {
  findUser,
  addUser,
  login,
  updateuser,
} = require("../Business/User.bussiness");
const userBusiness = require("../Business/User.bussiness");
const emailler = require("../Emails/email");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpController = require("./otp.controller");
const { Op } = require("sequelize");
const Host = require("../Models/HostModel");
const { default: axios } = require("axios");

class UserController {
  addUser = async (req, res, next) => {
    try {
      if (!(await findUser(req.body.email)).length > 0) {
        const result = addUser(req.body);
        if (result) {
          const otpCode = await otpController.getOtp(req.body.email);

          emailler.sendOTP(req.body.email, otpCode.code);
          res.status(200).send({
            status: true,
            code: 200,
            message: "user is created.",
            otpCode: otpCode.id,
          });
        } else {
          res.status(500).send({
            status: false,
            code: 500,
            message: "There is some error occure while creating the user.",
          });
        }
      } else {
        res.status(200).send({
          status: false,
          code: 401,
          message: "User has already exist.",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error in our side.",
      });
    }
  };

  getUser = async (req, res, next) => {
    try {
      const result = await UserModel.findAll({
        attributes: [
          "firstName",
          "lastName",
          "gender",
          "email",
          "role",
          ["bio", "about"],
          "phoneNo",
          "userImg",
          "password",
          "createdAt",
        ],
        where: {
          isActive: 1,
        },
      });
      if (result) {
        res.status(200).send({
          status: true,
          code: 200,
          data: result,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error occured from our side.",
      });
    }
  };
  getUserRequest = async (req, res, next) => {
    try {
      if (req.user.auth == true && req.user.data.role == 3) {
        const result = await UserModel.findAll({
          attributes: [
            "firstName",
            "lastName",
            "gender",
            "email",
            "role",
            ["bio", "about"],
            "phoneNo",
            "userImg",
            "password",
            "createdAt",
          ],
          where: {
            isActive: 1,
            forApproval: 2,
          },
          include: [
            {
              model: Host,

              required: true,
            },
          ],
        });
        if (result) {
          res.status(200).send({
            status: true,
            code: 200,
            data: result,
          });
        }
      } else {
        res.status(401).send({
          status: false,
          code: 401,
          message: "You are not allowed to access the data",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error occured from our side.",
      });
    }
  };
  getAllUsers = async (req, res, next) => {
    try {
      const result = await UserModel.findAll({
        attributes: [
          "firstName",
          "lastName",
          "gender",
          "email",
          ["bio", "about"],
          "role",
          "phoneNo",
          "userImg",
        ],
        where: {
          isActive: 1,
        },
      });
      if (result) {
        res.status(200).send({
          status: true,
          code: 200,
          data: result,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error occured from our side.",
      });
    }
  };

  requestToMakeHost = async (req, res, next) => {
    try {
      if (req.user.data.forApproval != 2) {
        if (req.user.auth == true && req.user.data.role != 2) {
          const addHost = await userBusiness.addHost({
            dateOfBirth: req.body.dateOfBirth,
            cnic: req.body.cnic,
            city: req.body.city,
            userId: req.user.data.id,
            certificate: req.user.certificateUrl,
          });
          if (addHost) {
            const response = await updateuser(req.user.data.id, {
              forApproval: 2,
            });

            let emailData = {
              name: req.user.data.firstName + " " + req.user.data.lastName,
              email: req.user.data.email,
              cnic: req.body.cnic,
              mobile: req.user.data.phoneNo,
            };

            emailler.becomaHost(emailData);
            if (response) {
              res.status(200).send({
                status: true,
                code: 200,
                message: "Request is sent for approval.Please wait.",
              });
            } else {
              res.status(500).send({
                status: false,
                code: 500,
                message: "Some error is occure from our side.",
              });
            }
          } else {
            res.status(500).send({
              status: false,
              code: 500,
              message: "There is some error in our side.",
            });
          }
        } else {
          res.status(401).send({
            status: true,
            code: 401,
            message: "Unauthorized request.",
          });
        }
      } else {
        res.status(409).send({
          status: false,
          code: 409,
          message: "The request to make host is already sent for approval.",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error in our side.",
      });
    }
  };

  getUserDatail = async (req, res) => {
    try {
      const result = await UserModel.findOne({
        attributes: [
          "firstName",
          "lastName",
          "gender",
          "email",
          "id",
          "role",
          ["bio", "about"],
          "phoneNo",
          "userImg",
        ],
        where: [
          {
            [Op.and]: [{ id: req.params.userId }, { isActive: 1 }],
          },
        ],
      });

      if (result) {
        res.status(200).send({
          status: true,
          code: 200,
          data: result,
        });
      } else {
        res.status(404).send({
          status: false,
          code: 404,
          message: "User is not found.",
        });
      }
    } catch (error) {
      console.log("error is", error);

      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error in our side.",
      });
    }
  };
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      let result = await findUser(email);
      if (result.length == 1) {
        const pass = await bcrypt.compare(password, result[0].password);
        if (pass) {
          let data = {
            //make the data to identify the user from their username
            username: result[0].username,
            email: result[0].email,
          };
          const authToken = jwt.sign(data, process.env.JWT_SECRATE);
          data = {
            id: result[0].id,
            firstName: result[0].firstName,
            lastName: result[0].lastName,
            email: result[0].email,
            bio: result[0].bio,
            datOfSignup: result[0].createdAt,
            gander: result[0].gender,
            forApproval: result[0].forApproval,
            phoneNo: result[0].phoneNo,
            userImg: result[0].userImg,
            role: result[0].role,
            isVerfied: result[0].isVerfied,
            auth: authToken,
          };
          // result[0].auth = authToken
          res.status(200).send({
            status: true,
            code: 200,
            data: [data],
          });

          const response = await axios.get("https://api.ipify.org");
          const publicIP = response.data;
          let emailData = {
            ip: publicIP,
            email: req.body.email,
            location: "Not sure",
            date: new Date().toLocaleString().replace(",", ""),
          };
          emailler.login(emailData);
        } else {
          res.status(401).send({
            status: false,
            code: 401,
            message: "Email or password is invalid.",
          });
        }
      } else {
        res.status(404).send({
          status: false,
          code: 404,
          message: "User is not exist.",
        });
      }
    } catch (err) {
      console.log("error is ", err);
      res.status(500).send({
        status: false,
        code: 500,
        message: "Some error is occure from our side.",
      });
    }
  };
  updateUser = async (req, res, next) => {
    try {
      if (req.user.auth && req.user.data.id == req.params.userId) {
        let flag = true;
        if (req.body.email) {
          flag = (await findUser(req.body.email)).length > 0 ? false : true;
        }
        if (flag) {
          const response = await updateuser(req.params.userId, req.body);
          if (response) {
            res.status(200).send({
              status: true,
              code: 200,
              message: "Record is successfully updated.",
            });
          } else {
            res.status(500).send({
              status: false,
              code: 500,
              message: "Some error is occure from our side.",
            });
          }
        } else {
          res.status(409).send({
            status: false,
            code: 409,
            message: "The email is already exist.",
          });
        }
      } else {
        res.status(401).send({
          status: false,
          code: 401,
          message: "You are not allowed to update the data",
        });
      }
    } catch (err) {
      console.log("error is ", err);
      res.status(500).send({
        status: false,
        code: 500,
        message: "Some error is occure from our side.",
      });
    }
  };

  updateUserProfile = async (req, res, next) => {
    try {
      if (req.user.auth == true && req.user.data.id.toString() == req.params.userId) {
        let flag = true;
        if (flag) {
          const response = await updateuser(req.params.userId, {
            userImg: req.user.profile,
          });
          if (response) {
            res.status(200).send({
              status: true,
              code: 200,
              message: "Record is successfully updated.",
            });
          } else {
            console.log("error is ", response);
            res.status(500).send({
              status: false,
              code: 500,
              message: "Some error is occure from our side.",
            });
          }
        } else {
          res.status(409).send({
            status: false,
            code: 409,
            message: "The email is already exist.",
          });
        }
      } else {
        res.status(401).send({
          status: false,
          code: 401,
          message: "You are not allowed to update the data",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "Some error is occure from our side.",
      });
    }
  };
  makeHost = async (req, res, next) => {
    try {
      if (
        req.user.auth &&
        req.user.data.role == 3 &&
        req.user.data.id != req.params.userId
      ) {
        let flag = true;
        if (req.body.email) {
          flag =
            (await userBusiness.getUserByParam({ id: req.params.userId }))
              .length > 0
              ? false
              : true;
        }
        if (flag) {
          let body = {
            forApproval: 0,
            role: 2,
          };
          const response = await updateuser(req.params.userId, body);
          if (response) {
            res.status(200).send({
              status: true,
              code: 200,
              message: "User is set as a host.",
            });

            const userRecord = await UserModel.findAll({
              attributes: ["firstName", "lastName", "email"],
              where: {
                isActive: 1,
                id: req.params.userId,
              },
            });
            if (userRecord) {
              emailler.approveAsHost({
                name: userRecord[0].firstName + " " + userRecord[0].lastName,
                email: userRecord[0].email,
              });
            }
          } else {
            res.status(500).send({
              status: false,
              code: 500,
              message: "Some error is occure from our side.",
            });
          }
        } else {
          res.status(409).send({
            status: false,
            code: 409,
            message: "The email is already exist.",
          });
        }
      } else {
        res.status(401).send({
          status: false,
          code: 401,
          message: "You are not allowed to update the data",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "Some error is occure from our side.",
      });
    }
  };

  rejectHost = async (req, res, next) => {
    try {
      if (
        req.user.auth &&
        req.user.data.role == 3 &&
        req.user.data.id != req.params.userId
      ) {
        let flag = true;
        if (req.body.email) {
          flag =
            (await userBusiness.getUserByParam({ id: req.params.userId }))
              .length > 0
              ? false
              : true;
        }
        if (flag) {
          let body = {
            forApproval: 0,
          };
          const response = await updateuser(req.params.userId, body);
          if (response) {
            res.status(200).send({
              status: true,
              code: 200,
              message: "User is reject to set as a host.",
            });

            const userRecord = await UserModel.findAll({
              attributes: ["firstName", "lastName", "email"],
              where: {
                isActive: 1,
                id: req.params.userId,
              },
            });
            if (userRecord) {
              emailler.rejectAsHost({
                name: userRecord[0].firstName + " " + userRecord[0].lastName,
                email: userRecord[0].email,
              });
            }
          } else {
            res.status(500).send({
              status: false,
              code: 500,
              message: "Some error is occure from our side.",
            });
          }
        } else {
          res.status(409).send({
            status: false,
            code: 409,
            message: "The email is already exist.",
          });
        }
      } else {
        res.status(401).send({
          status: false,
          code: 401,
          message: "You are not allowed to update the data",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: false,
        code: 500,
        message: "Some error is occure from our side.",
      });
    }
  };
}

module.exports = new UserController();
