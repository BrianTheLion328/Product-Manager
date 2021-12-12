const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must enter a product name!"],
        minlength: [3, "You must enter a product name that's at least 3 characters!"],
    },
    price: {
        type: String,
        required: [true, "You must enter a valid number for price!"],
        minlength: [1, "You must enter at least one number for price!"],
    },
    description: {
        type: String,
        required: [true, "You must enter a valid description"],
        minlength: [6, "Description must be at least 6 characters long"],
    },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
