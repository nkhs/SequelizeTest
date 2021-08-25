module.exports = (sequelize, DataTypes) => {
   const Stock = sequelize.define("stock", {
      note:  DataTypes.STRING,
      })
   Stock.associate = function (models) {
      Stock.belongsTo(models.product)
   };
   return Stock;
}