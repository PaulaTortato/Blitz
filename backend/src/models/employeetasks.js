'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Employee.belongsToMany(models.Tasks, {
        as: 'tasks',
        through: EmployeeTasks,
        foreignKey: 'employeeId',
        otherKey: 'taskId',
      });
    }
  }
  EmployeeTasks.init({}, {
    sequelize,
    modelName: 'EmployeeTasks',
    timestamps: false,
  });
  return EmployeeTasks;
};