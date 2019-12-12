'use strict'

const util = require('util')
const mysql= require('mysql')
const db = require('./../db')

const table = 'profile'

console.log('ProductsController');


module.exports = {
  get: (req, res) => {
    let sql = 'SELECT * FROM profile'
    db.query(sql, (err, response) =>{
      if (err) throw err
      res.json(response)
    })
  },
}
