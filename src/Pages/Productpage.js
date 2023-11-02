import React from 'react'
import Header from "../container/header/header.jsx"
import "./Productpage.css"
import product from "../images/Pantop.jpg"


function Productpage() {
  return (
    <div className='product_page_container'>
        <Header/>
        {/* First container for image , price and details */}

        <div className="product_first_container_1">
          <div className='product_Page_image'>

            <div className='product_image_secondary'>
              <img src={product} className='product_page_image2' alt="product" srcset="" />
              <img src={product} className='product_page_image3' alt="product" srcset="" />
              <img src={product} className='product_page_image4' alt="product" srcset="" />
              <img src={product} className='product_page_image5' alt="product" srcset="" />
            </div>

            <img src={product} className='product_page_image_main' alt="product" srcset="" />

          </div>

          <div className='product_details'>
            <h3>Pantop DSR</h3>
            <p>Aristo Pharmaceuticals Pvt Ltd</p>
          </div>

          <div className='product_price'>

            <div className='without_membershp'>
              <h2>Rs.150</h2>
            </div>

            <div className='with_membershp'>

            </div>

          </div>

        </div>
        {/* second part for ads and description */}
        <div className='product_first_container_2'>
          
        </div>
    </div>
  )
}
export default Productpage;