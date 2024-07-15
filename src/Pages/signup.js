import React from 'react'
import "./login.css"
import img from "../assests/images/Login_img.png"
import Logo from "../assests/images/Group 1.png"
import "./signup.css"
import {useNavigate,Link} from "react-router-dom"
function SignUp() {

  const navigate= useNavigate();
  const goToPage = () =>{
    navigate("/login");alert("sdsa");
  }
    
  return (
    <div className='signup_container'>
      <Link to="/"><img src={Logo} className='signup_Logo_image' alt="" srcset="" /></Link>
      <div className='signup_home'>
        <img src={img} className='signup_image' alt="" srcset="" />

        {/* Signup form to accept customer data */}
        <div className="signup_form">
          <div className='signup_form_names'>
            <input className='signup_first_name signup_field' placeholder='First Name' type="text"/><br/>
            <input className='signup_last_name signup_field' placeholder='Second Name' type="text"/><br/>
          </div>

          <input className='signup_email_name signup_field' placeholder='Email' type="email"/><br/>
          <input className='signup_password signup_field' placeholder='Password' type="text"/><br/>

          <div className='signup_form_details'>
            <input className='signup_phonenumber signup_field' placeholder='Phone number' type='number'/><br/>
            <input className='signup_pincode signup_field' placeholder='pincode' type="select"/><br/>
          </div>
          <div className='signup_form_details'>
            <input className='signup_state signup_field' placeholder='state' type="select"/><br/>
            <input className='signup_city signup_field' placeholder='city' type="select"/><br/>
          </div>
          <input className='signup_address signup_field' placeholder='Address' type="textarea"/><br/>
          <button className='signup_submit'>Sign up</button>
          <p>Already a customer? <Link className='signup_to_login' to="/login">Login</Link></p>
          {/* <p>Already a customer?<em className='signup_to_login' onClick={()=> goToPage()}>Login</em></p>  --> Using useNavigate hook  */ } 
        </div>
      </div>
    </div>
  )
}

export default SignUp;