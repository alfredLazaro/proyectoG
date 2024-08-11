'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Link.belongsTo(models.Algorithm, { foreignKey: 'algorithm_id', as: 'algorithm'});
    }
  }
  Link.init({
    link_id: DataTypes.INTEGER,
    link_name: DataTypes.STRING,
    link_url: DataTypes.STRING,
    link_type: DataTypes.STRING,
    link_domain: DataTypes.STRING,
    algorithm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Link',
  });
  return Link;
};