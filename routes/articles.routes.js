const express = require('express');
const ArticleController = require('../controllers/article.controller');
const { articleValidation } = require('../Middleware/article.validate');
const upload = require('../Multers/multer');
const getUserData = require('../Middleware/User');

const router = express.Router();

router.post('/article',getUserData, upload.single('file'), articleValidation, ArticleController.addArticle)

router.patch('/update/:articleId',upload.none(),getUserData, articleValidation, ArticleController.updateArticle)
router.patch('/delete/:articleId',getUserData, ArticleController.deleteArticle)

router.get('/article', ArticleController.getAllArticles)
router.get('/articleCount',getUserData, ArticleController.getArticleCount)
router.get('/articleByUserId/:id', ArticleController.getArticleByUserId)
router.get('/articlebyId/:id', ArticleController.getArticleById)

module.exports = router