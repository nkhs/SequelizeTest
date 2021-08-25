module.exports = (sequelize, Sequelize) => {
   const Order = sequelize.define("order", {
      orderNumber: {
         type: Sequelize.STRING,
      },
      totalPrice: {
         type: Sequelize.INTEGER,
      },
      address: {
         type: Sequelize.TEXT,
      },
      customerID: {
         type: Sequelize.INTEGER,
      },
      note: {
         type: Sequelize.TEXT,
      }
   });
   return Order;
}