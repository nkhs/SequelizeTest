module.exports = (sequelize, Sequelize) => {
   const Category = sequelize.define("category", {
      name: {
         type: Sequelize.STRING,
      },
      description: {
         type: Sequelize.TEXT,
      },
      hasParent: {
         type: Sequelize.BOOLEAN,
      },
      parentID: {
         type: Sequelize.INTEGER,
      }
   });
   return Category;
}