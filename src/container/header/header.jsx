import React,{useState} from 'react'
import "./header.css"
import logo from "../../images/Group 1.png"
import { Link } from "react-router-dom"
import LoginPage from "../../Pages/login.js"
import Button from '@mui/material/Button';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; account icon

function Header() {
    const [isDropDown,setIsOpenDropDown] = useState(false);

  return (
    <div className='navbar'>
        <div className='navbar_terms'>
            <div className='navbar_logo'>
                <Link to="/"><img src={logo} alt="LOGO" className='Logo' srcset="" /></Link>
                <ul className='service_list'>
                    <li>LAB TEST</li>
                    <li>FIRST AID</li>
                    <li>AYURVADIC</li>
                </ul>
            </div>
{/* to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
 }} */}

            <div className='navbar_basicservice'>
                <ul className='basicservice_list'>
                    <li className='offer'>Offers</li>
                    {/* <li><Link className='login' to="./login">Login</Link>|<Link className='signup' to="./signup">SignUp</Link></li> */}
                    <li>
                        {/* <img src="" alt="" /> FOR ICON */}
                        {/* <span className='cart_count'>3</span> */}
                        Cart
                    </li>

                    {/* brop down menu for account section on header  */}
                    <li className='account' onClick={()=>setIsOpenDropDown(!isDropDown)}>
                        {/* <img src="" alt="" /> FOR ICON */}
                        Account
                        {
                            isDropDown !== false &&
                                <ul className='account_bropdown_menu'>
                                <li><Button> Account</Button></li>
                                <li><Button>Orders</Button></li>
                                <li><Button><Link className='login' to="./login">Login</Link></Button></li>
                                <li><Button><Link className='signup' to="./signup">SignUp</Link></Button></li>
                                <li><Button>Setting</Button></li>
                            </ul>
                        }
                    </li>


                </ul>
            </div>
        </div>

        <div className='navbar_search'>
            <input type="search" name="" className='searchbox' placeholder='Search' id="search_box" />
        </div>
        <div className='navbar_all_options'>
            <ul>
                <li>All medicine</li>
                <li>Fitness</li>
                <li>Ayurvadic</li>
                <li>Baby Care</li>
                <li>Surgical</li>
                <li>Health Care Devices</li>
                <li>Covid Essentials</li>
                <li>Vitamins & Nutritions</li>
                <li>Homeopathic</li>
                <li>Covid Essentials</li>
                <li>Vitamins & Nutritions</li>
                <li>Homeopathic</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;