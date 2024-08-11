'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Algorithm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Algorithm.belongsTo(models.Subject, { foreignKey: 'subject_id', as: 'subject'});
    }
  }
  Algorithm.init({
    algorithm_id: DataTypes.INTEGER,
    algorithm_name: DataTypes.STRING,
    algorithm_description: DataTypes.STRING,
    // code_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Algorithm',
  });
  return Algorithm;
};