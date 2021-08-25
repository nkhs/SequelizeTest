const db = require("../models");
const Product = db.product;
const Stock = db.stock;
const Op = db.Sequelize.Op;


exports.getAllProducts = (req, res) => {
   if (req.query) {
      const queryParams = req.query;
      Product.findAll({
         where: queryParams
      }).then((products) => {
         res.status(200).send(products);
      })
   } else {
      Product.findAll().then((products) => {
         res.status(200).send(products);
      })
   }
};


exports.getAllAvailableProducts = (req, res) => {
   if (req.query) {
      const queryParams = req.query;
      console.log(queryParams);
      Product.findAll({
         include: ['stocks'],
         where: queryParams
      }).then((products) => {
         res.status(200).send(products);
      })
   } else {
      Product.findAll().then((products) => {
         res.status(200).send(products);
      })
   }
};

exports.getProductById = (req, res) => {
   const id = req.params.id;
   console.log(id);
   Product.findOne({ where: { id: id } }).then((product) => {
      res.status(200).send(product);
   })
}





