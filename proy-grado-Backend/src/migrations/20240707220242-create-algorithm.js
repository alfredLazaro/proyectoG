'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Algorithms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      algorithm_id: {
        type: Sequelize.INTEGER
      },
      algorithm_name: {
        type: Sequelize.STRING
      },
      algorithm_description: {
        type: Sequelize.STRING
      },
      code_id: {
        type: Sequelize.INTEGER
      },
      subject_id: {
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
    await queryInterface.dropTable('Algorithms');
  }
};