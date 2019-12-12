// 'use strict';
// module.exports = function(app) {
//   var productsCtrl = require('./controllers/ProductsController');
//   console.log('routes');
//
//   // todoList Routes
//   app.route('/products')
//     .get(productsCtrl.get)
//     .post(productsCtrl.store);
//
//
//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
// };

var express = require('express');
var router = express.Router();

var test = require('./controllers/TestController');

router.get('/api/v1/products', test.getAllProducts);

module.exports = router;
