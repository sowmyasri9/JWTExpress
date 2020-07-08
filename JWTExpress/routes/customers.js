var express = require('express');
 var router = express.Router();
 let verifyToken = require('./verifytoken');
 
 /* GET customers listing. */
 router.get('/', function (req, res, next) {
 res.send('respond with a resource');
 });

 /*GET customers without any middleware */
 router.get('/data', function (req, res, next) {
    let customerdata = [
    {
    customerid: 1,
    customername: 'Warner'
    },
    {
    customerid: 2,
    customername: 'Candice'
    },
    {
    customerid: 3,
    customername: 'Isla'
    }
    ];
    
    res.json(customerdata);
    });
 
 module.exports = router;