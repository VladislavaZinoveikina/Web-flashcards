'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roundId: {
        references: {
          model: 'Rounds',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      questionId: {
        references: {
          model: 'Questions',
          key: 'id',
        },
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
    await queryInterface.dropTable('Guesses');
  }
};