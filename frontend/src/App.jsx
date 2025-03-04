import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import EditProduct from './components/EditProduct'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/edit/:id' element={<EditProduct />} />
      <Route path='/details' element={<ProductDetails />} />
      

      </Routes>
    </div>
  )
}

export default App