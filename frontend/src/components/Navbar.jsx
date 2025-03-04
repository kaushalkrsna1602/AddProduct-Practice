import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-4 bg-black text-white flex justify-end gap-6'>
        <Link to={"/home"}>Home</Link>
        <Link to={"/addproduct"}>Add Products</Link>
        <Link to={"/edit/:id"}>Edit Products</Link>
        <Link to={"/details"}>Product Details</Link>

    </div>
  )
}

export default Navbar