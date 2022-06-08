import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
<h1>Products Page</h1>
    <ul>
      <li><Link to="/products/p1"> A Book</Link></li>
      <li><Link to="/products/p2">A Car</Link></li>
      <li><Link to="/products/p3">A Tv 3</Link></li>
    </ul>
    </div>
    
  )
}

export default Products