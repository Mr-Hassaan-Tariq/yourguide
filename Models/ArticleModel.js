const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../Database/DatabaseConfig");
const User = require('./UserModel');

// Define Article model
const Article = sequelize.define('Article', {
  blogId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  isActive: {
    type: DataTypes.TINYINT(1),
    allowNull: true,
    defaultValue: 1
  },
  allowed: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  blogTitle: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  blogCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  catagory: {
    type: DataTypes.STRING(15),
  },
});

// Define ArticleDetail model
const ArticleDetail = sequelize.define('ArticleDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Article,
      key: 'blogId',
    },
  },
  blogData: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});

// Define association between Article and ArticleDetail
Article.hasOne(ArticleDetail, { foreignKey: 'blogId' });
ArticleDetail.belongsTo(Article, { foreignKey: 'blogId' });

User.hasMany(Article, { foreignKey: 'id' });
Article.belongsTo(User, { foreignKey: 'userId' });

// Export models
module.exports = {
  Article,
  ArticleDetail,
};