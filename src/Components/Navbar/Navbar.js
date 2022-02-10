import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./Sidemenudata";

import './Navbar.css';
import {IconContext} from 'react-icons'
import Logo from '../../Assets/logo.js';



function Navbar() {

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);  

    return (

        <>
        <IconContext.Provider  value={{ color: 'None' }}>
        <div className='navbar'>
        <Link to='#' className='menu-bars' >
        <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <Link to = "/Home">
        <Logo className="App-logo"   />   
        </Link>
        
        

        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='close-menu'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li> 
              );
            })}
          </ul>
        </nav>

        </div>

        </IconContext.Provider>
        </>

        
    );

}

export default Navbar;
