import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
 
function Footer() {
  return (
    <div className='footer_container'>
        <div className="footer_container_first">
            553A Awasthi Medical Hall , P.V.T. Krishna nagar colony, Bashratpur, Gorakhpur-273004 .
            <p>Google map</p>
        </div>
        <div className='footer_container_second'>

            <div className='footer_services'>
                <div className='Heading_of_section'>
                    <h2>Services</h2>
                </div>
                <div className="footer_catogaries_list">
                    <ul className=''>
                        <li>Blood Test</li>
                        <li>Baby care</li>
                        <li>Health plan</li>
                        <li>Order Medicine</li>
                    </ul>
                </div>
            </div>

            <div className='footer_customer_support'>
                <h2>Policy Info</h2>
                <div className='footer_catogaries_list'>
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Private policy</li>
                        <li>Return policy</li>
                        <li>Customer support policy</li>
                    </ul>
                </div>
                
            </div>

            <div className="footer_about_us">
                <h2>company</h2>
                <div className='footer_catogaries_list'>
                    <ul>
                        <li>Sell at AMH</li>
                        <Link to="/About"><li>About As</li></Link>
                        <li>Careers</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;