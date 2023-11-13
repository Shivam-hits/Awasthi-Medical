import React from 'react'
import product from "../../images/Pantop.jpg"
import "./Productpage_upperHalf.css"
import ads from "../../images/ads.png"

function Productpage_upperHalf(){
  return (
    <div className='productPage_upperHalf_container'>
      {/* 1st part of product page */}
      <div className='product_Page_image 1stPart'>
        <div className='product_image_secondary'>
          <img src={product} className='product_page_image image1' alt="product" srcset="" />
          <img src={product} className='product_page_image image2' alt="product" srcset="" />
          <img src={product} className='product_page_image image3' alt="product" srcset="" />
          <img src={product} className='product_page_image image4' alt="product" srcset="" />
        </div>
        <img src={product} className='product_page_image_main' alt="product" srcset="" />
      </div>
      {/* 2nd part of product page */}
      <div className='product_details 2ndPart'>
        <h3>Pantop DSR</h3>
        <p>Aristo Pharmaceuticals Pvt Ltd</p>
      </div>
      {/* 2nd part ends here */}


      {/* 3rd part */}
      <div className='3rdPart'>
        {/*product price box */}
        <div className='product_price_box'>
          <div className='without_membershp'>
            <input type="checkbox"  id="checkbox" />
            <h2 className='price'>₹ 150</h2>
          </div>

          <div className='with_membership'>
            <input type="checkbox" name="" id="" />
            <h2 className='price'>₹ 20 </h2><small>Plus care plane</small>
          </div>

          <select name="quantity" id="product_quantity">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
          <p className="product_no_tablets">strip of 10 tables</p>

          <div className='product_cart_btn'>
            <p>Add To Cart</p>
          </div>
        </div>
        
        <img src={ads} className='product_page_ads' alt="" srcset="" />
      </div>
      {/* 3rd end here  */}

    </div>
  )
}

export default Productpage_upperHalf;
// ₹