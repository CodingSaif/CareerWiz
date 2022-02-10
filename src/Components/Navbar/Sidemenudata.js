import React from 'react'
import * as FaIcons from "react-icons/fa";
import Logo from '../../Assets/logo';



export const SidebarData = [


    {
        title:'Home',
        path: '/home',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    }, 

    {
        title:'Quiz',
        path: '/quiz',
        icon: <FaIcons.FaGlasses />,
        cName: 'nav-text'
    },

    {
        title:'Blogs',
        path: '/blog',
        icon: <FaIcons.FaBloggerB />,
        cName: 'nav-text'
    },

    {
        title:'User Dashboard',
        path: '/userdash',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },



]