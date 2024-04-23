const { Op } = require("sequelize");
const ContactModel = require("../Models/ContactModel");

class ContactBusiness {
  addContact = async (data) => {
    try {
      const result = await ContactModel.create(data, { raw: false });
      console.log("result is ",result)
      if (result) {
        return true;
      }
    } catch (error) {
      console.log("error si s",error)
      return false;
    }
  };

  getContact = async(param = {})=>{
    try {
        const result = await ContactModel.findAll(param)
        return result
    } catch (error) {
        console.log('eror is',error)
        return []
    }
  }
  updateContact = async(id,param = {})=>{
    try {
        const result = await ContactModel.update(param,{where:{id:id}})
        console.log('result is ',result)
        return result[0] == 1?true:false
    } catch (error) {
        console.log('eror is',error)
        return false;
    }
  }
}

module.exports = new ContactBusiness();
