import React from 'react'
import { CgProfile } from "react-icons/cg";
import { TfiMenu } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import './header.css'

 import icon from './Songs/icon.jpg'
const Header = () => {
  return (
    <header>
      <div className='header-container'>
      <div className="brand">
        <img src={icon} alt="brand" />
        <h1>Sangeet Sphere</h1>
         </div>
         <nav>
         
          <ul>
          <li className="menu-con"><TfiMenu />
 </li>
          <div className='list'>
         <Link to='/' style={{textDecoration:"none"}}> <li>Home</li></Link>
           <Link to='/about' style={{textDecoration:"none"}}> <li>About</li></Link>
           <Link to='/service' style={{textDecoration:"none"}}> <li>Service</li></Link>
           
            
        </div>
              <div className='login-icon'> <CgProfile />
              <div className='loginOptions'>
                <p>Login</p>
                <hr/>
                <p>signUp</p>
              </div>
              </div>
          </ul>
          
         </nav>
     </div>
    </header>
  )
}

export default Header
