const UserBussiness = require("../Business/User.bussiness");
const contactBusiness = require("../Business/contact.business");
const otpBusiness = require("../Business/otp.business");
const email = require("../Emails/email");
const OtpModal = require("../Models/OTPModel");

class ContactController {
  addContact = async (req, res, next) => {
    const response = await contactBusiness.addContact(req.body);
    if (response) {
      email.addContact(req.body);
      res.status(200).send({
        status: true,
        code: 200,
        data:{message: "Contact info is added"},
      });
    } else {
      res.status(500).send({
        status: false,
        code: 500,
        message: "There is some error while adding the contact info.",
      });
    }
  };

  getContact = async (req, res, next) => {
    if (req.user.data.role == 3) {
      const response = await contactBusiness.getContact();
      res.status(200).send({
        status: true,
        code: 200,
        data: response,
      });
    } else {
      res.status(401).send({
        code: 401,
        status: false,
        message: "You are not authorise to get the contacts info.",
      });
    }
  };
  update = async (req, res, next) => {
    if (req.user.data.role == 3) {
      console.log("req is", req.params);
      const response = await contactBusiness.updateContact(
        req.params.contactId,
        { response: req.body.response,
          isEntertained:1 }
      );
      if (response) {
        res.status(200).send({
          status: true,
          code: 200,
          data: "Response is saved.",
        });
      } else {
        res.status(500).send({
          status: false,
          code: 500,
          message: "Response is not sent.",
        });
      }
    } else {
      res.status(401).send({
        code: 401,
        status: false,
        message: "You are not authorise to update the contacts info.",
      });
    }
  };
}

module.exports = new ContactController();
