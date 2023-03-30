'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [{
      name: 'Эльбрус',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Песни молодости наших преподавателей',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'География: (не)душно',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  },

  async down (queryInterface, Sequelize) {

  }
};
