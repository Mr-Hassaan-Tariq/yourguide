const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../Database/DatabaseConfig");

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        autoIncrement:true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:''
    },
    userImg: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:''
    },
    phoneNo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    role:{
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue:1

    },
    isActive: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue:1
    },
    isVerfied: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue:0
    },
    forApproval: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue:0
    },
    gender: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false

    },
    // Other model options go here
});


module.exports = User

