const Product = require('../models/product.model');

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then( (newProduct) => res.send(newProduct) )
        .catch( (error) => console.log(error) );
};
