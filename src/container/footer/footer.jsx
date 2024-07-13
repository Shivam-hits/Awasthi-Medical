import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
 
function Footer() {
  return (
    <div className='footer_container'>
        <div className='footer_first_half'>
            <div className="footer_container_first">

    {/* MAP COMPONENT */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.
    999421733409!2d83.37015557596817!3d26.776288365939124!2m3!1f0!2f0!3f0!3m2
    !1i1024!2i768!4f13.1!3m3!1m2!1s0x39914451460cd64f%3A0xa9ee6098bf83fa26!2s
    Awasthi%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1720558732829!5m2!1sen!2sin" 
    width="500" height="350" className='map_embaded'  allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className='footer_container_second'>

            <div className='footer_contact'>

                <div className='Heading_of_section'>
                    <h2>contact Info</h2>
                </div>
                <div className="footer_catogaries_list">

                    <ul className='footer_catogaries-service ul'>
                        <li>
                            <span>Phone no: 7860224226</span>
                        </li>
                        <li>
                        <a title="Mail to: contact@awasthimedical.com" href="mailto:contact@awasthimedical.com">contact@awasthimedical.com</a>
                        </li>
                    </ul>

                </div>

            </div>
            <div className='footer_services'>

                <div className='Heading_of_section'>
                    <h2>Services</h2>
                </div>
                <div className="footer_catogaries_list">

                    <ul className='footer_catogaries-service ul'>
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
                    <ul className='footer_catogaries-policy ul'>
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
                    <ul className='footer_catogarie-campany ul'>
                        <li>Sell at AMH</li>
                        <Link to="/About"><li>About As</li></Link>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>

        <div className='footer_second_half'>
            <br />
            <span>
                    Awasthi Medical © 2021 - 2024 Awasthi Medical. All Rights Reserved. Designed by Shivam Awasthi.
            </span>
        </div>

    </div>
  )
}

export default Footer;