const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../Database/DatabaseConfig');

const city = sequelize.define('city', {
    // Model attributes are defined here
    id: {
        type: DataTypes.TINYINT,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    country:{

        type:DataTypes.STRING,
        allowNull:false,
        unique:false
    },
    isAllowed:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:1
    },
    isBlock:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:0
    }
    // Other model options go here
});

module.exports = city;
