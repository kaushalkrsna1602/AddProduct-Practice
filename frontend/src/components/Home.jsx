import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data , setData] = useState([])

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/products")
      let data = await res.json()
      setData(data)
      console.log(data)
    }

    getData()
  }, [])
  return (
    <div>
      <h1>All Products</h1>

      {data && data.map((item) => {
        return (
          <div key={item._id}> 
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.description}</p> 
          </div>
        )
      })}
    </div>
  )
}

export default Home