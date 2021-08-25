'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'grondverzet',
      description: 'Description',
      hasParent: false,
      parentID: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'hoogtewerk',
      description: 'Description',
      hasParent: false,
      parentID: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'schaarhoogwerker',
      description: 'Description',
      hasParent: true,
      parentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: 'telescoophoogwerker',
      description: 'Description',
      hasParent: true,
      parentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'minigraver',
      description: 'Description',
      hasParent: true,
      parentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: 'kniklader',
      description: 'Description',
      hasParent: true,
      parentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
