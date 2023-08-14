import React from 'react'
import product from "../../images/Pantop.jpg"
import "./probox.css"
import {Link} from "react-router-dom"
function Probox() {
  function a(){
    alert("added to cart");
  }
  return (
    <div className='ProductBox'>
      <img src={product} className='product_image' alt="product" srcset="" />
      <div className='productBox_content'>
        <Link to="/Product page"  style={{ textDecoration: 'none' , color:"#FF6f61"}}><h3 className='product_name'>Pantop D-SR tablets</h3></Link>
        <p className='quantity'>Strip of 10 tablets</p>
        <p className='MRP'> MRP.<s>300</s> <em className='discount'>10%</em> </p>
        <h4 className='price'>RS.270</h4>
        <button type="submit" className='cart_btn' onClick={a}>+ Add to cart</button>
      </div>
    </div>
  )
}
export default Probox;