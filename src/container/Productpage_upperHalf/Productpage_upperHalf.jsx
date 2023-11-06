import React from 'react'
import product from "../../images/Pantop.jpg"
import "./Productpage_upperHalf.css"

function Productpage_upperHalf() {
  return (
    <div className='productPage_upperHalf_container'>
      {/* 1st part of product page */}
      <div className='product_Page_image'>
        <div className='product_image_secondary'>
          <img src={product} className='product_page_image image1' alt="product" srcset="" />
          <img src={product} className='product_page_image image2' alt="product" srcset="" />
          <img src={product} className='product_page_image image3' alt="product" srcset="" />
          <img src={product} className='product_page_image image4' alt="product" srcset="" />
        </div>
        <img src={product} className='product_page_image_main' alt="product" srcset="" />
      </div>
      {/* 2nd part of product page */}
      <div className='product_details'>
        <h3>Pantop DSR</h3>
        <p>Aristo Pharmaceuticals Pvt Ltd</p>
      </div>
      {/* 3rd part */}
      <div className='product_price'>
        <div className='without_membershp'>
          <input type="checkbox"  id="checkbox" />
          <span>₹.150</span>
        </div>
        <div className='with_membership'>
          <input type="checkbox" name="" id="" />
          <span>₹.150 <small>care plane</small></span>
        </div>
        <div className='product_cart_btn'>
          <p>Add To Cart</p>
        </div>
      </div>
    </div>
  )
}

export default Productpage_upperHalf;
// ₹