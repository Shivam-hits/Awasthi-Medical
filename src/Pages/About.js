import React from 'react'
import Header from "../container/header/header.jsx"
import "./About.css"
function About() {
  return (
    <div >
      <Header />
      <div className='about_container'>

        {/* <div className='about_banner'>
          From last 26 years we make healthcare more Affordable and Accessible.
        </div> */}

        <div className="mission">

          <div>
            
            <div>
              <h5>About Us</h5>
              <h1 className='title'>Our Mission</h1>
              <h3>From last 26 years we make healthcare more Affordable and Accessible.</h3>
            </div>
            
            <p>              
              Our mission at Awasthi is to empower individuals on their journey to optimal health.<br/>
              We are dedicated to providing a comprehensive and accessible platform that transcends<br/>
              traditional boundaries,connecting you to the latest innovations in healthcare.<br/>
              Our commitment extends beyond being a mere e-commerce platform; we aspire to be your <br/>
              reliable health partner.
            </p>
          </div>

          <div>
            <p>IMAGES</p>
          </div>

        </div>


        {/* -------------- Leaders------------------ */}
        <h3 className="Leaders">Leadership</h3>
        <div className='about_leaders'>
          <div>
            <h2>Amod Kumar awasthi</h2>
            <span>Founder</span>
          </div>
          <div>
            <h2>Pramod Kumar awasthi</h2>
            <span>Founder</span>
          </div>
          <div>
            <h2>Shivam awasthi</h2>
            <span>C.T.O</span>
          </div>
        </div>
        {/* ----------------------------------------*/}

      </div>
    </div>
  )
}

export default About;