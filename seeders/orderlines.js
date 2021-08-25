'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orderlines', [{
      id: 1,
      orderID: 1,
      stockID: 1,
      bookingStart: new Date("August 30 2021 9:00"),
      bookingEnd: new Date("September 5 2021 10:00"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
