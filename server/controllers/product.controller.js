const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then( (products) => res.send(products) )
        .catch((error) => console.log(error.response))
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then( (newProduct) => res.send(newProduct) )
        .catch( (error) => console.log(error.response) );
};
