const { User } = require('../models');

const userData = [
  {
    user_name: "johndoe",
    password: 'password1234',
  },
  {
    user_name: "janedoe",
    password: 'password1234',
  },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;