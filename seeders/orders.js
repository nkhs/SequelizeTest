'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      id: 1,
      orderNumber: '123',
      totalPrice: 50,
      address: 'Testadres 123, 5611XP, Eindhoven',
      customerID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
