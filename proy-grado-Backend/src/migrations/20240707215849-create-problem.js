'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Problems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      problem_id: {
        type: Sequelize.INTEGER
      },
      problem_name: {
        type: Sequelize.STRING
      },
      problem_description: {
        type: Sequelize.STRING
      },
      problem_input: {
        type: Sequelize.STRING
      },
      problem_output: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Problems');
  }
};