const express = require("express")
const mongoose = require("mongoose")
const { productRouter } = require("./routes/productRoutes")
const {connectDB} = require("./lib/database")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

connectDB()


app.use(productRouter)

app.listen("8080" , () => {
    console.log("server is runniing on port 8080");
})