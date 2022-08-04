const express = require('express');
const ProductController = require('../controlers/product');
const app = express();

app.get('/products',ProductController.getProducts );
app.get('/products/:id',ProductController.getProduct);
app.get('/products/:productId',ProductController.getProduct);

module.exports= app;
    
