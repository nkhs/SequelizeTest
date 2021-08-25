const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.user) {
      res.status(400).send({
         message: "Content can not be empty!"
      });
      return;
   }

   // Create a user 
   const user = {
      uid: req.body.user.uid,
      email: req.body.user.email,
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      emailVerified: req.body.user.emailVerified,
   };

   // Save Tutorial in the database
   User.create(user)
      .then(data => {
         res.status(200).send(data);
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message || "Error when saving user to database"
         });
      });
};

exports.getByUid = (req, res) => {
   const uid = req.params.uid;
   const user = User.findOne({where: {uid: uid}});
   if(!user) {
      res.status(500).send({
       message:  "No user found"
      });
   } else {
      res.status(200).send(user.json());
   }
};




