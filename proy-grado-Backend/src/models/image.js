'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Algorithm , { foreignKey: 'algorithm_id', as: 'algorithm'});
      Image.belongsTo(models.Problems , { foreignKey: 'problem_id', as: 'problem'})
    }
  }
  Image.init({
    image_id: DataTypes.INTEGER,
    image_name: DataTypes.STRING,
    image_route: DataTypes.STRING,
    algorithm_id: DataTypes.INTEGER,
    problem_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};