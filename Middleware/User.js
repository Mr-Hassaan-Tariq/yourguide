const jwt = require('jsonwebtoken')
const { findUser } = require('../Business/User.bussiness')

const getUserData = async (req, res, next) => {
    const token = req.header('authtoken');
    try {
        
    if (token) {
        const data = jwt.verify(token, process.env.JWT_SECRATE)
        const record = await findUser(data.email);
        if (record.length > 0) {
            req.user = {
                success: true,
                auth: true,
                imgUrl:[],
                data: record[0]
            }
        } else {
            res.status(401).send({
                status: false,
                code: 401,
                message: "Unauthorised user."
            })
        }
    } else {
        res.status(401).send({
            status: false,
            code: 401,
            message: "Unauthorised user."
        })
    }
    next()
    } catch (error) {
        
        res.status(401).send({
            status: false,
            code: 401,
            message: "Invalid token."
        })
    }
}


module.exports = getUserData;