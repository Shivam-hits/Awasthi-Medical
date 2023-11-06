import React from 'react'
import Header from "../container/header/header.jsx"
import "./Productpage.css"
import Productpage_upperHalf from "../container/Productpage_upperHalf/Productpage_upperHalf.jsx"

function Productpage() {
  return (
    <div className='product_page_container'>
        <Header/>
        {/* First container for image , price and details */}
        <Productpage_upperHalf/>

        {/* second part for ads and description */}
        <div className='product_first_container_2'>
          
        </div>
    </div>
  )
}
export default Productpage;