'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Problem.init({
    problem_id: DataTypes.INTEGER,
    problem_name: DataTypes.STRING,
    problem_description: DataTypes.STRING,
    problem_input: DataTypes.STRING,
    problem_output: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Problem',
  });
  return Problem;
};