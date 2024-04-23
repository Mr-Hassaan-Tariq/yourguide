const { Op } = require('sequelize');
const UserModel = require('../Models/UserModel')
const HostModel = require('../Models/HostModel')
const bcrypt = require('bcrypt')

class userBusiness {

    findUser = async (email) => {
        const result = await UserModel.findAll({
            where: {
                [Op.or]: [
                    { email: email }
                ],
                [Op.and]: [
                    { isActive: 1 }
                ]
            },
            raw: true

        });

        if (result.length > 0)
            return result;
        else
            return result
    }
    addUser = async (user) => {
        try {
            const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND));
            user.password = await bcrypt.hash(user.password, salt);
            const result = await UserModel.create(user);

            if (result)
                return true;
            else
                return false;

        } catch (error) {
            return false
        }
    }

    addHost = async (host) => {
        try {

            const result = await HostModel.create(host)
            return true
        } catch (error) {
            console.log('error is ', error)
            return false;
        }
    }
    findUserbyId = async (id) => {
        let query = {
            id: id,
            isActive: 1
        }
        const result = await UserModel.findAll({
            where: query
        });

        return result
    }
    updateuser = async (userId, data) => {
        try {

            const updatedRow = await UserModel.update(
                data
                , {
                    where: { id: userId }
                })

                console.log('updated data ',updatedRow)
            return updatedRow[0]
        } catch (error) {
            console.log('error is ',error)
            return false;
        }
    }

    getUserByParam = async (query) => {
        try {
            param.isActive = 1;
            let result = await UserModel.findAll({
                where: param

                // plain: true
            });

            return result

        } catch (error) {
            console.log('error is ', error)
            return [];
        }
    }
    verifyUser = async (email) => {
        try {

            if ((await this.findUser(email)).length > 0) {
                const result = await UserModel.update({
                    'isVerfied': 1
                },
                    { where: { email } })

                if (result)
                    return true
            }
            return false

        } catch (error) {
            return false;
        }
    }

}
module.exports = new userBusiness;