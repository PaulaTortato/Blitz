'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmployeeTasks', {
      employeeId: {
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Employees',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      taskId: {
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Tasks',
          key: 'id',
        },
        type: Sequelize.NUMBER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EmployeeTasks');
  }
};