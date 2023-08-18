import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer_container'>
        <dir className="footer_container_first">
            address
            and some detailws
        </dir>
        <div className='footer_container_second'>
            <div className='footer_services'>
                services
            </div>
            <div className='footer_customer_support'>
                customer support
            </div>
            <div className="footer_about_us">
                about us
            </div>
        </div>
    </div>
  )
}

export default Footer;