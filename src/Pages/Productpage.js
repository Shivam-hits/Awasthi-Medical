import React from 'react'
import Header from "../container/header/header.jsx"
import "./Productpage.css"
import Productpage_upperHalf from "../container/Productpage_upperHalf/Productpage_upperHalf.jsx"
import Productpage_lowerHalf from "../container/Productpage_lowerHalf/Productpage_lowerHalf.jsx"
import Footer from '../container/footer/footer.jsx'

function Productpage() {
  return (
    <div className='product_page_container'>
      <Header/>
      {/* First container for image , price and details */}
      <Productpage_upperHalf/>

      {/* second part for ads and description */}
      <Productpage_lowerHalf/>
      <Footer/>

    </div>
  )
}
export default Productpage;