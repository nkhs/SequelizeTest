module.exports = (sequelize, Sequelize) => {
   const OrderLine = sequelize.define("orderline", {
      orderID: {
         type: Sequelize.INTEGER,
      },
      stockID: {
         type: Sequelize.INTEGER,
      },
      bookingStart: {
         type: Sequelize.DATE,
      },
      bookingEnd: {
         type: Sequelize.DATE,
      },
   });
   return OrderLine;
}