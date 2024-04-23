const { Op, where } = require('sequelize');
const bcrypt = require('bcrypt');
const { Article, ArticleDetail } = require('../Models/ArticleModel');
const { convertToLocalDate } = require('../helper/time');
const User = require('../Models/UserModel');
const UserBussiness = require('./User.bussiness');

class ArticleBusiness {

    findPresense = async (title = '') => {
        let query = {
            blogTitle:title,
            isActive:1
        }
        let result = await Article.findAll({
            where: query
        });
        if (result.length > 0) {
            return true;
        }
        else
            return false
    }
    findArticle = async (param) => {
        param.isActive = 1;
        let result = await Article.findAll({
            where:param
              ,
            include: [{
                model: ArticleDetail,
                required: true,
                attributes: ['blogData', 'blogId', 'createdAt']
            },{
                model: User,
                required: true,
                attributes: ['firstName','id', 'lastName', 'userImg']
            },
        ],
            // plain: true
        });


        if (result.length > 0) {
            // result[0].createdAt = convertToLocalDate(result[0].createdAt)
            // const data = await ArticleDetail.findOne({
            //     where: {
            //         [Op.or]: [
            //             param
            //         ]
            //     }
            // });
            // result[0].blogData = data.blogData;
            return result;
        }
        else
            return result
    }
    findArticleByUserId = async (id) => {
        let result = await Article.findAll({
            where: {
                [Op.or]: [
                    { userId: id }
                ],
                [Op.and]:[
                    {isActive:1}
                ]
            },
            include: [{
                model: User,
                required: true,
                attributes: ['firstName','id', 'lastName', 'userImg']
            }],
            // plain: true
        });



        if (result.length > 0)
            result[0].createdAt = convertToLocalDate(result[0].createdAt)

        return result
    }
    updateArticle = async(id,param)=>{
        try {
            const response = await Article.update(param,
                {where:{
                    blogId:id
                }
            })
            return response[0];
        } catch (error) {
            console.log('error is ',error)
            return 0;
        }
    }
    updateArticleDetail = async(id,param)=>{
        try {
            const response = await ArticleDetail.update(param,
                {where:{
                    blogId:id
                }
            })
            return response[0];
        } catch (error) {
            console.log('error is ',error)
            return 0;
        }
    }
    getAllArticles = async (count) => {
        let result = await Article.findAll({
            where: {
                // [Op.or]: [
                //     { userId: id }
                // ],
                [Op.and]:[
                    {isActive:1}
                ]
            },
            include: [{
                model: User,
                required: true,
                attributes: ['firstName', 'id','lastName', 'userImg']
            }],
            limit: count ?parseInt(count) : null,
            order: [['createdAt', 'DESC']]
            // plain: true
        });
        if (result.length > 0) {
            let user = {}
            // for (let i = 0; i < result.length; i++) {

            //     user = await UserBussiness.findUserbyId(result[i].userId)
            //     result[i].user = {
            //         firstName: user[0].firstName,
            //         lastName: user[0].lastName,
            //         userImg: user[0].userImg,
            //     }
            // }

            return result;
        } else {
            return result
        }

    }

    getCounts =async()=>{
        try {
            let obj = {};
            const totatlCount = await Article.count({
                where:{isActive:1}
            })
            const totatlDeleteCount = await Article.count({
                where:{isActive:0}
            })

            obj.totalArticle = totatlCount;
            obj.deletedArticle = totatlDeleteCount

            return obj;
        } catch (error) {
            console.log('error is ',error)
            return {};
        }
    }
}
module.exports = new ArticleBusiness;