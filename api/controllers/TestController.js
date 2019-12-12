var db = require('../db');

function getAllProducts(req, res) {
  let sql = 'SELECT * FROM profile'
  db.query(sql, (e, r) => {
    res.json(r);
  });
}

module.exports.getAllProducts = getAllProducts;
