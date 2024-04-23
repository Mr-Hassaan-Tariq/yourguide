const { Op } = require("sequelize");
const { Article } = require("../Models/ArticleModel");
const User = require("../Models/UserModel");
const {Experience} = require("../Models/ExperienceModel");

class DashboardBusiness {

    getStatistics = async (req, res) => {
        try {

            let obj = {};
            const articlesCounts = await Article.count({
                where:{
                    isActive:1
                }
            })

            const deletedarticlesCounts = await Article.count({
                where:{
                    isActive:0
                }
            })

            const userCounts = await User.count({
                where:{
                    isActive:1
                }
            })
            const approvalRequest = await User.count({
                where:{
                    isActive:1,
                    forApproval:2
                }
            })
            const experienceCount = await Experience.count({
                where:{
                    isActive:1
                }
            })
            const deletedExperienceCount = await Experience.count({
                where:{
                    isActive:0
                }
            })
            obj.articles = articlesCounts;
            obj.deletedArticles = deletedarticlesCounts;
            obj.users = userCounts;
            obj.approval = approvalRequest;
            obj.experience = experienceCount;
            obj.deletedExperienceCount = deletedExperienceCount;
            return obj

        } catch (error) {
            console.log('error is ',error)
            return {};
        }
    }
    getUserStatistics = async (req, res) => {
        try {

            let obj = {};

            const userCounts = await User.count({
                where:{
                    isActive:1
                }
            })
            const approvalRequest = await User.count({
                where:{
                    isActive:1,
                    forApproval:2
                }
            })
            const host = await User.count({
                where:{
                    isActive:1,
                    role:2
                }
            })
            const deleted = await User.count({
                where:{
                    isActive:0,
                }
            })
            obj.totalUser = userCounts;
            obj.approval = approvalRequest;
            obj.host = host;
            obj.deleted = deleted;
            return obj

        } catch (error) {
            console.log('error is ',error)
            return {};
        }
    }
}

module.exports = new DashboardBusiness;