import React from 'react'
import ProBox from "../../components/probox/probox.jsx"
import "./productbrow.css"
import {Link} from "react-router-dom"
function Productbrowser() {
  return (
    <div className='productbrowser'>
      <p className='product_heading'>Products</p>
      <div className='products'>
        <ProBox />
        <ProBox />
        <ProBox />
        <ProBox />
        <ProBox />
        <ProBox />
        <ProBox />
      </div>
    </div>
  )
}
export default Productbrowser;