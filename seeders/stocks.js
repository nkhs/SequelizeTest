'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Stocks', [{
    //   id: 1,
    //   productID: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stocks', null, {});
  }
};
