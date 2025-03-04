const express = require("express")
const { getProducts, addProducts, updateProducts, deleteProducts } = require("../controllers/productController")
const productRouter = express.Router()


productRouter.get("/products" , getProducts )

productRouter.post("/products" , addProducts )

productRouter.put("/products/:id" , updateProducts )

productRouter.delete("/products/:id" , deleteProducts )

module.exports = { productRouter }
