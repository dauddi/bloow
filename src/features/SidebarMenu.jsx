import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Brand } from '../components/sidebar';
import Logo from '../assets/images/logo.svg'

import { FiHome, FiSearch, FiHeart, FiUpload, FiSettings } from "react-icons/fi";

const title = "Bloow"
const sidebarMenuItems = [
  {icon: FiHome, text: 'Home', path: '/'},
  {icon: FiSearch, text: 'Search', path: '/search'},
  {icon: FiHeart, text: 'Fovorites', path: '/favorites'},
  {icon: FiUpload, text: 'Upload', path: '/upload'},
 ]

const MenuItem = ({ Icon, Text }) => {
  return (
    <div className="flex items-center justify-start p-4 font-bold hover:cursor-pointer hover:bg-purple-100 hover:rounded-md hover:text-[rgb(2,0,36)] ">
      <Icon className="text-xl" />
      <h2 className="pl-4" >{Text}</h2>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="flex-col justify-between text w-full h-screen" >
      <Link to="/" className="hover:cursor-pointer " >
        <Brand Logo={Logo} Title={title} />
      </Link>

      <div className="flex-col text-center justify-center m-10" >
        { sidebarMenuItems.map(item => (
          <NavLink key={item.path} to={`${item.path}`} >
            <MenuItem Icon={item.icon} Text={item.text}/>
          </NavLink>
        )) }
      </div>

      <div className="flex-col text-center justify-center m-10 ">
        <NavLink to="profile" >  
          <MenuItem Icon={FiSettings} Text="Settings" />
        </NavLink>
      </div>
    </div>
  )
};

export default Sidebar;
