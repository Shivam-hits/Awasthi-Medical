import React from 'react'
import product from "../../images/Pantop.jpg"
import "./probox.css"
import {Link} from "react-router-dom"
function Probox() {
  function a(){
    alert("added to cart");
  }
  return (
    <Link to="./Productpage" target='blank' style={{ textDecoration: 'none' , color:"#FF6f61"}}>
    <div className='ProductBox'>
      
      {/* product image */}
      <div>
        <img src={product} className='product_image' alt="product" srcset="" />
      </div>
      {/* product details */}
      
      <div className='product_details'>
       <h3 className='product_name main'>Pantop D-SR tablets</h3>
        <p className='quantity secondary'>Strip of 10 tablets</p>
      </div>

      {/* product price */}
      <div className='product_price'>
        <p className='MRP secondary'> MRP.<s>300</s> <em className='discount'  style={{ textDecoration: 'none' , color:"#FF6f61"}}>10%</em> </p>
        <h4 className='price'>RS.270</h4>
      </div>
      {/* add to cart button */}
      {/* <div>
        <button type="submit" className='cart_btn' onClick={a}>+ Add to cart</button>
      </div> */}
      
    </div>
    </Link>
  )
}
export default Probox;