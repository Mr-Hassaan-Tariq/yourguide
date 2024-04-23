const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../Database/DatabaseConfig');

const ContactModel = sequelize.define('contact', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    response:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:''
    },
    isEntertained:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
        defaultValue:0
    },
    // Other model options go here
});

module.exports = ContactModel;
