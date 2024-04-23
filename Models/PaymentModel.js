const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const sequelize = require("../Database/DatabaseConfig");
const User = require('./UserModel');
const {Experience} = require("../Models/ExperienceModel")

// Define Article model
const Payment = sequelize.define('Payment', {
 
  PaymentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  experienceId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model: Experience,
      key: 'experienceId',
    },
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isSuccessfull: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue:0
  },
  isActive: {
    type: DataTypes.TINYINT(1),
    allowNull: true,
    defaultValue: 1
  },
});



Payment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Payment, { foreignKey: 'userId' });

Payment.belongsTo(Experience, { foreignKey: 'experienceId' });
Experience.hasMany(Payment, { foreignKey: 'experienceId' });

module.exports = Payment;