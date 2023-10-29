const { User } = require('../models');

const userData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password1234',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: 'password1234',
  },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;