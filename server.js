const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3001
var routes = require('./api/routes.js') //importing route

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

// app.get('/api/v1/test', function(req, res) {
//   res.send('Hello world!')
// })
// app.get('/api/routes.js',function(req,res){
//   res.send('this is Home')
// })

app.listen(port)

console.log('Longkaka' + port);
