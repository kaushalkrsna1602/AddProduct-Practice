import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


const AddProduct = () => {

    const nav = useNavigate()

    const [data, setData] = useState({ name: "", price: "", category: "" , description : "" })
    console.log(data)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-4">Add New Products</h2>

                <input 
                    onChange={(e) => setData({ ...data, name: e.target.value })} 
                    type="text" 
                    value={data.name} 
                    placeholder="Name" 
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    onChange={(e) => setData({ ...data, price: e.target.value })} 
                    type="text" 
                    value={data.price} 
                    placeholder="price" 
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    onChange={(e) => setData({ ...data, category: e.target.value })} 
                    type="text" 
                    value={data.category} 
                    placeholder="category" 
                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    onChange={(e) => setData({ ...data, description: e.target.value })} 
                    type="text" 
                    value={data.description} 
                    placeholder="description" 
                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button onClick={() => {

                    if(data.name == "" || data.price == "" || data.category == "")
                    {
                        return
                    }

                    async function appProd() {
                        const res = await fetch("http://localhost:8080/products", {
                            method : "POST",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify(data)
                        })
                        const json = await res.json()

                        if(json.msg == "true")
                        {
                            nav("/")
                        }
                        
                    }
                    appProd()
                }} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default AddProduct;