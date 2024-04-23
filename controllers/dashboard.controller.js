const DashboardBusiness = require('../Business/dashboard.business')
class dashboard {

    getStatistics = async (req, res) => {
        try {


            if (req.user.auth == true && req.user.data.role == 3) {

                const response = await DashboardBusiness.getStatistics();
                res.status(200).send({
                    status: true,
                    code: 200,
                    data: response
                })
            } else {
                res.status(401).send({
                    status: false,
                    code: 401,
                    message: "You are not allowed to get data."
                })
            }
        } catch (error) {
            console.log('error is ', error);
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error while getting data."
            })
        }
    }
    getUserStatistics = async (req, res) => {
        try {


            if (req.user.auth == true && req.user.data.role == 3) {

                const response = await DashboardBusiness.getUserStatistics();
                res.status(200).send({
                    status: true,
                    code: 200,
                    data: response
                })
            } else {
                res.status(401).send({
                    status: false,
                    code: 401,
                    message: "You are not allowed to get data."
                })
            }
        } catch (error) {
            console.log('error is ', error);
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error while getting data."
            })
        }
    }
}

module.exports = new dashboard;