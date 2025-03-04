const { Products } = require("../models/productModels")
const express = require("express")

const getProducts = async (req , res) => {
    try {
        let data = await Products.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log("Error in getProducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const addProducts = async (req , res) => {
    try {
        let data = await Products.insertOne(req.body)
        res.status(200).json({message : "New Products Addded"})
    } catch (error) {
        console.log("Error in addProducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateProducts = async (req , res) => {
    try {
        let data = await Products.findByIdAndUpdate({_id : req.params.id},req.body)
        res.status(200).json({message : "Products Updated"})
    } catch (error) {
        console.log("Error in updateProducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteProducts = async (req , res) => {
    try {
        let data = await Products.findByIdAndDelete({_id : req.params.id})
        res.status(200).json({message : "Products deleted"})
    } catch (error) {
        console.log("Error in deleteProducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {getProducts , addProducts , updateProducts , deleteProducts}