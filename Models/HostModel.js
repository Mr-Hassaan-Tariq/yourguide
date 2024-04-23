const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../Database/DatabaseConfig");
const  User  = require('./UserModel'); // Import the User model correctly

const Host = sequelize.define('Host', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  certificate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  cnic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Other model options go here
});

User.hasOne(Host, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

Host.belongsTo(User, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

module.exports = Host;
