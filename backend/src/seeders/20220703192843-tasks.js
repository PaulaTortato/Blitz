'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales.',
        status: 'pendente',
        employeeId: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales.',
        status: 'em andamento',
        employeeId: 2,
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales.',
        status: 'pronto',
        employeeId: 3,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
