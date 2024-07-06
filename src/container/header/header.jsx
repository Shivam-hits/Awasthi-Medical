import React,{useState} from 'react'
import "./header.css"
import logo from "../../images/Group 1.png"
import { Link } from "react-router-dom"
import LoginPage from "../../Pages/login.js"
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
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
                    <li>
                        <span>
                            <Button>Lab Test</Button>                            
                        </span>
                    </li>
                    <li>
                        <span>
                        <Button>
                            FIRST AID
                        </Button>
                        </span>
                    </li>
                    <li>
                        <span>
                        <Button>
                            AYURVADIC
                        </Button>
                        </span>
                    </li>
                </ul>
            </div>
{/* to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
 }} */}

            <div className='navbar_basicservice'>
                <ClickAwayListener onClickAway={()=>setIsOpenDropDown(false)}>
                    <ul className='basicservice_list'>
                        {/* <li className='offer'>Offers</li> */}
                        <li>
                            {/* <img src="" alt="" /> FOR ICON */}
                            {/* <span className='cart_count'>3</span> */}
                            Cart
                        </li>

                        {/* brop down menu for account section on header  */}

                        <li className='account' >
                            {/* <img src="" alt="" /> FOR ICON */}
                            
                                <span onClick={()=>setIsOpenDropDown(!isDropDown)}>
                                    Account
                                </span>
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
                </ClickAwayListener>
            </div>
        </div>

        <div className='navbar_search'>
            <input type="search" name="" className='searchbox' placeholder='Search' id="search_box" />
        </div>
        <div className='navbar_all_options'>
            <ul>
                <li>
                    <Button>
                        All medicine
                    </Button>
                </li>
                <li>
                    <Button>
                        Fitness
                    </Button>
                </li>
                <li>
                    <Button>
                        Ayurvadic
                    </Button>
                </li>
                <li>
                    <Button>
                        Baby Care
                    </Button>
                </li>
                <li>
                    <Button>
                        Surgical
                    </Button>
                </li>
                <li>
                    <Button>
                        Health Care Devices
                    </Button>
                </li>
                <li>
                    <Button>
                        Homeopathic
                    </Button>
                </li>
                <li>
                    <Button>
                        Covid Essentials
                    </Button>
                </li>
                <li>
                    <Button>
                        Vitamins & Nutritions
                    </Button>
                </li>
                <li>
                    <Button>
                        Homeopathic
                    </Button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;