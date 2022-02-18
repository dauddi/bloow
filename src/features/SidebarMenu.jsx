import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Brand } from '../components/sidebar';
import Logo from '../assets/images/logo.svg'

import { FiHome, FiSearch, FiHeart, FiUpload, FiSettings } from "react-icons/fi";

const title = "Bloow"
const sidebarMenuItems = [
  {icon: FiHome, text: 'Home', path: '/'},
  {icon: FiSearch, text: 'Search', path: '/search'},
  {icon: FiHeart, text: 'Favorites', path: '/favorites'},
  {icon: FiUpload, text: 'Upload', path: '/upload'},
 ]

const MenuItem = ({ Icon, Text, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className={`flex items-center justify-start p-4 font-bold hover:cursor-pointer my-2 ${ isActive ? "bg-purple-100 rounded-md text-[rgb(2,0,36)]" : "hover:bg-purple-100 hover:rounded-md hover:text-[rgb(2,0,36)]"} ` }>
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
          <Link key={item.path} to={`${item.path}`} >
            <MenuItem Icon={item.icon} Text={item.text} to={`${item.path}`} />
          </Link>
        )) }
      </div>

      <div className="flex-col text-center justify-center m-10 ">
        <Link to="/profile" >
          <MenuItem Icon={FiSettings} Text="Settings" />
        </Link>
      </div>
    </div>
  )
};

export default Sidebar;
