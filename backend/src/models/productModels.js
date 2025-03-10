const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true, 
        trim : true
    },
    description : {
        type : String,  
        trim : true
    },
    price : {
        type : Number,
        required : true,
        trim : true,
        min : 0
    },
    category : {
        type : String,
        required : true,
        trim : true
    }
}, {timestamps : true})

const Products = mongoose.model("Product" , ProductSchema)

module.exports = { Products }