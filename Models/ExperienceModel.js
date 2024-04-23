const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../Database/DatabaseConfig");
const User = require('./UserModel');

// Define Article model
const Experience = sequelize.define('Experience', {
  experienceId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  startFrom: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  endFrom: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  days: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  travelFrom: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  travelTo: {
    type: DataTypes.STRING(200),
    allowNull: false,
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
  forApproval: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  groupSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});


// Define ArticleDetail model
const ExperienceDetail = sequelize.define('ExperienceDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  experienceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Experience,
      key: 'experienceId',
    },
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});

// Define ArticleDetail model
const experienceDay = sequelize.define('ExperienceDay', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  day:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  experienceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Experience,
      key: 'experienceId',
    },
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});




// Define ArticleDetail model
const Images = sequelize.define('Images', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  experienceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Experience,
      key: 'experienceId',
    },
  },
  imgLink: {
    type: DataTypes.STRING,
    allowNull: false,

  }
});


Experience.hasMany(experienceDay,{foreignKey:'experienceId'})
experienceDay.belongsTo(Experience,{foreignKey:'experienceId'})

// Define association between Article and ExperienceDetail
Experience.hasOne(ExperienceDetail, { foreignKey: 'experienceId' });
ExperienceDetail.belongsTo(Experience, { foreignKey: 'experienceId' });

Experience.hasMany(Images, { foreignKey: 'experienceId' });
Images.belongsTo(Experience, { foreignKey: 'experienceId' });

User.hasMany(Experience, { foreignKey: 'id' });
Experience.belongsTo(User, { foreignKey: 'userId' });

// Export models
module.exports = {
  Experience,
  ExperienceDetail,
  Images,
  experienceDay
};