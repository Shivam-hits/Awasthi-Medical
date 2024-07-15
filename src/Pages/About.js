import React from 'react'
import Header from "../container/header/header.jsx"
import "./About.css"
import demo from "../assests/images/people/peoo.jpg"
import L1 from "../assests/images/people/cto.jpg"
import L2 from "../assests/images/people/leader.jpg"
function About() {
  return (
    <div >
      <Header />
      <div className='about_us_container'>

        {/* <div className='about_banner'>
          From last 26 years we make healthcare more Affordable and Accessible.
        </div> */}

        <div className="about_us_mission">

          <div className='about_us_text'>
            
            <div className='about_us_text_1st_para'>
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

          <div className='about_us_image_container'>
            <img className='about_us_main_image' src={demo}></img>
          </div>

        </div>


        {/* -------------- Leaders------------------ */}
        <h3 className="Leaders">Leadership</h3>
        <div className='about_leaders_container'>
          <div className='about_leader'>
            <div>
              <h2>Amod Kumar awasthi</h2>
              <span>Founder</span>
            </div>
            <img src={L2} className='founder'></img>
          </div>
          <div>
            <div>
              <h2>Pramod Kumar awasthi</h2>
              <span>Founder</span>
            </div>
            <img src={demo} className='founder'></img>
          </div>
          <div>
            <div>
              <h2>Shivam awasthi</h2>
              <span>C.T.O</span>
            </div>
            <img src={L1} className='founder cto'></img>
          </div>
        </div>
        {/* ----------------------------------------*/}

      </div>
    </div>
  )
}

export default About;