'use strict';
const {
  Model
} = require('sequelize');
const algorithm = require('./algorithm');
module.exports = (sequelize, DataTypes) => {
  class Code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Code.belongsTo(models.Algorithm, { foreignKey: 'algorithm_id', as: 'algorithm'});
    }
  }
  Code.init({
    code_id: DataTypes.INTEGER,
    code_name: DataTypes.STRING,
    code_content: DataTypes.STRING,
    algorithm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Code',
  });
  return Code;
};