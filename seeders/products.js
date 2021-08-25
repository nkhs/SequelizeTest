'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      id: 1,
      SKU: '12345',
      name: 'Kniklader | 1 ton',
      description: 'Description',
      categoryID: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      SKU: '67890',
      name: 'Schaarhoogwerker | Diesel 10m',
      description: 'Description',
      categoryID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
