module.exports = app => {
   const category = require("../controllers/category.controller.js");
   var router = require("express").Router();

   router.get('/all/:name/like', category.getAllCategoriesByNameLike);
   router.get('/:name', category.getCategoryByName);
   router.get('/', category.getAllCategories)

   router.get('/sub-categories/:parentID', category.getSubcategories);

   router.get('/path/:id', category.getPathByName);
   
   app.use('/api/categories', router);
};