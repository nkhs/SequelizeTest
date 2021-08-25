const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;
const util = require('util')


exports.getAllCategoriesByNameLike = (req, res) => {
   if (req.query) {
      const queryParams = req.query;
      queryParams.name = { [Op.substring]: req.params.name }
      Category.findAll({
         where: queryParams
      }).then((products) => {
         res.status(200).send(products);
      })
   }
};

exports.getPathByName = (req, res) => {
   const queryParams = req.query ? req.query : {};
   let path = "";
   queryParams.id = req.params.id
   Category.findOne({
      where: queryParams
   }).then((product) => {
      path = `${product.name}`
      if (product.hasParent == true) {
         Category.findOne({ where: { id: product.parentID } }).then((product) => {
            path = `${product.name}/${path}`
            res.status(200).send(path);
         })
      }
   });
}

exports.getAllCategories = (req, res) => {
   if (req.query) {
      const queryParams = req.query;
      Category.findAll({
         where: queryParams
      }).then((products) => {
         res.status(200).send(products);
      })
   } else {
      Category.findAll({
         where: queryParams
      }).then((products) => {
         res.status(200).send(products);
      });
   }
}
exports.getCategoryByName = (req, res) => {
   const queryParams = req.query ? req.query : {};
   queryParams.name = req.params.name
   Category.findOne({
      where: queryParams
   }).then((product) => {
      res.status(200).send(product);
   })
};

exports.getSubcategories = (req, res) => {
   const queryParams = req.query ? req.query : {};
   queryParams.parentID = req.params.parentID
   Category.findAll({
      where: queryParams
   }).then((products) => {
      res.status(200).send(products);
   })
}


