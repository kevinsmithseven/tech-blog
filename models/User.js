const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Create User model and add checkPassword method
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    // TODO don't forget to include in the userRoutes.js
  }
}

// Create User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {  
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  // Ensure no two users have the same username
      validate: {
        isAlphanumeric: true,  
        len: [3, 30],  // minimum length of three characters, max length of 30 characters in username
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // minimum length of 8 characters in password
      },
    },
  },
  {
    hooks: {
      // bcrypt password prior to user creation
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;