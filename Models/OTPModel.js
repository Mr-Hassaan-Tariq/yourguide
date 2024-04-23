const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../Database/DatabaseConfig');

const OtpModal = sequelize.define('OTP', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique:true
    },
    otpNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false
    },
    // Other model options go here
});

module.exports = OtpModal;
