import React from 'react'
import {Link} from "react-router-dom"
import "./login.css"
import img from "../../src/images/Login_img.png"
import Logo from "../../src/images/Group 1.png"
import google from "../../src/images/google.png"
import facebook from "../../src/images/facebook.png"
import twitter from "../../src/images/twitter.png"

function Login() {
  return (
    <div className='Login_container'>
      <Link to="/"><img src={Logo} className='login_Logo_image' alt="" srcset="" /></Link>
      <div className='login_home'>
        {/* login image --> 2 person image  */}
        <img src={img} className='login_image' alt="" srcset="" />

        <form className='login_form' >
          {/* <label >Email or Phone Number</label><br/> */}
          <input className='login_email_box' type="text" size={50} placeholder='Email or Phone number'/><br/>

          {/* <label >Password</label><br/>
          <input className='login_password_box'  type="text" /><br/> */}
          {/* password will apear in next section it user is present then password page will appear if not the signup page will appear  */}

          <button className='login_submit_btn'>Login</button>
          <p className="">New customer? <Link className="login_signup" to="/signup">Sign Up</Link> </p>
        </form>

        <div className='login_with'>
          <button className='login_with_google  login_with_btn'><img src={google} className='login_with_image' alt="" srcset="" /></button>
          <button className='login_with_meta login_with_btn'><img src={facebook} className='login_with_image' alt="" srcset="" /></button>
          <button className='login_with_twitter login_with_btn'><img src={twitter} className='login_with_image' alt="" srcset="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Login;