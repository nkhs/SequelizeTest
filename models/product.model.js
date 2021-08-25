module.exports = (sequelize, Sequelize) => {
   const Product = sequelize.define("product", {
      SKU: {
         type: Sequelize.STRING,
      },
      name: {
         type: Sequelize.STRING,
      },
      description: {
         type: Sequelize.TEXT,
      },
      categoryID: {
         type: Sequelize.INTEGER,
      }
   });
   Product.associate = function (models) {
      Product.hasMany(models.Stock, { foreignKey: 'productID', as: 'stocks' })
   };
   return Product;
}
