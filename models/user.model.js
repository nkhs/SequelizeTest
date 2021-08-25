module.exports = (sequelize, Sequelize) => {
   const User = sequelize.define("user", {
      uid: {
         type: Sequelize.STRING
      },
      email: {
         type: Sequelize.STRING
      },
      firstName: {
         type: Sequelize.STRING
      },
      lastName: {
         type: Sequelize.STRING,
      },
      emailVerified: {
         type: Sequelize.BOOLEAN,
      }
   });

   return User;
};