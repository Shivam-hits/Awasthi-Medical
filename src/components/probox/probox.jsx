import React from 'react'
import product from "../../images/Pantop.jpg"
import "./probox.css"
function Probox() {
  function a(){
    alert("added to cart");
    console.log("done");
  }
  return (
    <div className='ProductBox'>
      <img src={product} className='product_image' alt="product" srcset="" />
      <div className='productBox_content'>
        <h3 className='product_name'>Pantop D-SR tablets</h3>
        <p className='quantity'>Strip of 10 tablets</p>
        <p className='MRP'> MRP.<s>300</s> <em className='discount'>10%</em> </p>
        <h4 className='price'>RS.270</h4>
        <button type="button" onclick="a()">+ Add to cart</button>
      </div>
    </div>
  )
}

export default Probox;