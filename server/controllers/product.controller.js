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

module.exports.getOneProduct = (req, res) => {
    Product.findOne( {_id: req.params.id} )
        .then(product => res.send(product) )
        .catch(error => res.send(error.response))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true, // this means we want the new updated product in the .then()
        runValidators: true,
    })
        .then((updatedProduct) => res.send(updatedProduct) )
        .catch(error => res.status(400).json(error.response))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.send(result) )
        .catch(error => res.status(400).json(error.response))
}
