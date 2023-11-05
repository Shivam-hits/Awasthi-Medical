import React from 'react'
import Header from "../container/header/header.jsx"
import "./About.css"
function About() {
  return (
    <div >
      <Header />
      <div className='about_container'>
        <div className='about_banner'>
          From last 26 years we make healthcare more Affordable and Accessible.
        </div>


        {/* -------------- Leaders------------------ */}
        <h3>Leadership</h3>
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