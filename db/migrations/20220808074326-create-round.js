'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rightAnswersNumber: {
        type: Sequelize.INTEGER
      },
      userId: {
        references: {
          model: 'Users',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      questionsNumber: {
        type: Sequelize.INTEGER
      },
      topicId: {
        references: {
          model: 'Topics',
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
    await queryInterface.dropTable('Rounds');
  }
};