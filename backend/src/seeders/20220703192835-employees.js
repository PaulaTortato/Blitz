'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@email.com',
        password: 'password123'
      },
      {
        firstName: 'Maria',
        lastName: 'Joana',
        email: 'majo@email.com',
        password: 'password123'
      },
      {
        firstName: 'Phil',
        lastName: 'Mahar',
        email: 'phil_m@email.com',
        password: 'password123'
      },
      {
        firstName: 'Wanda',
        lastName: 'Adams',
        email: 'w_a@email.com',
        password: 'password123'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
