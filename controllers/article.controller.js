const articleBusiness = require("../Business/article.business");
const { ArticleDetail, Article } = require("../Models/ArticleModel")
const emailler = require("../Emails/email");
class ArticleController {
    addArticle = async (req, res, next) => {


        try {
            if (req.user.auth) {


                const finder = await articleBusiness.findPresense(req.body.blogTitle);
                // console.log("req is",req)
                if (!finder) {
                    const article = await Article.create({
                        blogTitle: req.body.blogTitle,
                        userId: req.user.data.id,
                        blogCity: req.body.blogCity,
                        imgUrl: req.user.imgUrl,
                        catagory: req.body.catagory,
                    })
                    if (article) {
                        const articleDetail = await ArticleDetail.create({
                            blogData: req.body.blogData,
                            blogId: article.dataValues.blogId,
                        });

                        if (articleDetail) {

                            res.status(200).send({
                                status: true,
                                code: 200,
                                message: "Article is added."
                            })

                            emailler.addArticle({
                                email:req.user.data.email,
                                name:req.user.data.firstName+" "+req.user.data.lastName,
                                img:req.user.imgUrl,
                                title:req.body.blogTitle
                            })
                        }

                    }
                } else {

                    res.status(401).send({
                        status: false,
                        code: 401,
                        message: "Article already added with this titile."
                    })
                }

            } else {

                res.status(401).send({
                    status: false,
                    code: 401,
                    message: "User is not authorise to add article."
                })
            }
        } catch (error) {

            console.log("error is", error)
            res.status(500).send({
                status: false,
                code: 500,
                error
            })
        }
    }



    updateArticle = async (req, res, next) => {


        try {
            if (req.user.auth) {


                const finder = await articleBusiness.findArticle({ blogId: parseInt(req.params.articleId) });

                if (finder.length > 0) {


                    if (finder[0].userId == req.user.data.id) {

                        const body = {
                            blogTitle: req.body.blogTitle,
                            blogCity: req.body.blogCity,
                            catagory: req.body.catagory
                        }

                        const result = await articleBusiness.updateArticle(req.params.articleId, body)
                        if (result == 1) {
                            if ((await articleBusiness.updateArticleDetail(req.params.articleId, { blogData: req.body.blogData })) == 1) {

                                res.status(200).send({
                                    status: false,
                                    code: 200,
                                    message: "Article is updated successfully.",
                                })
                            } else {
                                res.status(500).send({
                                    status: false,
                                    code: 500,
                                    message: "There is some error while updating the article."
                                })
                            }
                        } else {
                            res.status(500).send({
                                status: false,
                                code: 500,
                                message: "There is some error while updating the article."
                            })
                        }
                    } else {
                        res.status(401).send({
                            status: false,
                            code: 401,
                            message: "You are not allowed to update the article."

                        })
                    }
                } else {
                    res.status(404).send({
                        status: false,
                        code: 404,
                        message: "Article is not found that you want to update.",
                    })

                }

            } else {

                res.status(401).send({
                    status: false,
                    code: 401,
                    message: "User is not authorise to add article."
                })
            }
        } catch (error) {

            console.log("error is", error)
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error while updating the article."
            })
        }
    }
    deleteArticle = async (req, res, next) => {


        try {
            if (req.user.auth) {


                const finder = await articleBusiness.findArticle({ blogId: parseInt(req.params.articleId) });

                if (finder.length > 0) {


                    if (finder[0].userId == req.user.data.id) {

                        const body = {
                            isActive: 0
                        }

                        const result = await articleBusiness.updateArticle(req.params.articleId, body)
                        if (result == 1) {
                            res.status(200).send({
                                status: false,
                                code: 200,
                                message: "Article is deleted successfully.",
                            })
                        } else {
                            res.status(500).send({
                                status: false,
                                code: 500,
                                message: "There is some error while updating the article."
                            })
                        }
                    } else {
                        res.status(401).send({
                            status: false,
                            code: 401,
                            message: "You are not allowed to delete the article."

                        })
                    }
                } else {
                    res.status(404).send({
                        status: false,
                        code: 404,
                        message: "Article is not found that you want to delete.",
                    })

                }

            } else {

                res.status(401).send({
                    status: false,
                    code: 401,
                    message: "User is not authorise to delete article."
                })
            }
        } catch (error) {

            console.log("error is", error)
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error while deleting the article."
            })
        }
    }


    getAllArticles = async (req, res, next) => {
        try {
            const articles = await articleBusiness.getAllArticles(req.query.limit)

            // if(articles.length > 0){

            res.status(200).send({
                status: true,
                code: 200,
                data: articles
            })
            // }else{

            //     res.status(404).send({status:false,
            //         code:404,
            //         data:[],
            //         message:'Article is not found.'
            //     })
            // }
        } catch (error) {
            console.error(error);
        }
    }


    getArticleCount = async(req,res,next)=>{

        try {
            if(req.user.auth == true && req.user.data.role == 3){
                const response = await articleBusiness.getCounts()
                res.status(200).send({
                    status:true,
                    code:200,
                    data:response
                })
            }else{
                res.status(401).send({
                    status:false,
                    code:401,
                    message:"You are not authorise to access the data."
                })
            }
        } catch (error) {
            console.log('error is ',error)
            res.status(500).send({
                status:false,
                code:500,
                message:"There is some error in our side."
            })
        }
    }


    getArticleById = async (req, res, next) => {
        try {
            const result = await articleBusiness.findArticle({ blogId: req.params.id })
            if (result.length == 0) {
                res.status(404).send({
                    status: false,
                    code: 404,
                    message: "Article is not found."
                })
            } else {
                res.status(200).send({
                    status: true,
                    code: 200,
                    data: result
                })
            }

        } catch (error) {
            console.error('gerter', error);
        }
    }
    getArticleByUserId = async (req, res, next) => {
        try {
            const result = await articleBusiness.findArticle({ userId: req.params.id })
            // console.log('result is ',result)

            if (result.length == 0) {
                res.status(404).send({
                    status: false,
                    code: 404,
                    message: "Article is not found."
                })
            } else {
                res.status(200).send({
                    status: true,
                    code: 200,
                    data: result
                })
            }

        } catch (error) {
            console.error(error);
        }
    }
}


module.exports = new ArticleController