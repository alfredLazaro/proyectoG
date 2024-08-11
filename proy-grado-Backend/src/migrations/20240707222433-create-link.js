'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link_id: {
        type: Sequelize.INTEGER
      },
      link_name: {
        type: Sequelize.STRING
      },
      link_url: {
        type: Sequelize.STRING
      },
      link_type: {
        type: Sequelize.STRING
      },
      link_domain: {
        type: Sequelize.STRING
      },
      algorithm_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Links');
  }
};