'use strict'
var express = require('express');
var api=express.Router();
var productoController=require('../controllers/producto.comntroller');


api.get('/Producto', productoController.getProducto);
api.post('/save',productoController.insertProducto );

module.exports=api;