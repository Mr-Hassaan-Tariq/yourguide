const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../Database/DatabaseConfig');
const {Experience} = require('../Models/ExperienceModel')
const services = sequelize.define('services', {
  // Model attributes are defined here
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    isAllowed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue:1
    },
  // Other model options go here
});


const servicesInclude = sequelize.define('servicesInclude', {
  // Model attributes are defined here
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
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: services,
        key: 'id',
      },
    }
  // Other model options go here
});

const servicesExclude = sequelize.define('servicesExclude', {
  // Model attributes are defined here
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
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: services,
        key: 'id',
      },
    }
  // Other model options go here
});


//for service include table
Experience.hasMany(servicesInclude,{foreignKey:'experienceId'})
servicesInclude.belongsTo(Experience)
// servicesInclude.belongsTo(Experience,{foreignKey:'experienceId'})
services.hasMany(servicesInclude,{foreignKey:'serviceId'})
servicesInclude.belongsTo(services)


//for service exclude table
Experience.hasMany(servicesExclude,{foreignKey:'experienceId'})
servicesExclude.belongsTo(Experience)
// servicesExclude.belongsTo(Experience,{foreignKey:'experienceId'})
services.hasMany(servicesExclude,{foreignKey:'serviceId'})
servicesExclude.belongsTo(services)

module.exports = {services,servicesInclude,servicesExclude};
