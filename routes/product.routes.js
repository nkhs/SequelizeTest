module.exports = app => {
  const product = require("../controllers/product.controller.js");

  var router = require("express").Router();

  router.get('/', product.getAllProducts);
  router.get('/:id', product.getProductById);

  router.get('/available/:id', product.getAllAvailableProducts);

  app.use('/api/products', router);
}; 