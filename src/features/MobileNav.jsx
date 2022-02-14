import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiSearch, FiHeart, FiUpload, FiSettings } from "react-icons/fi";

const mobileMenuLinks = [
  {Icon: FiHome, text: 'Home', path: '/'},
  {Icon: FiSearch, text: 'Search', path: '/search'},
  {Icon: FiHeart, text: 'Fovorites', path: '/favorites'},
  {Icon: FiUpload, text: 'Upload', path: '/upload'},
 ]

const MobileNav = () => {
  return (
    <div className='md:hidden w-screen border-t-[1px] border-gray-200 absolute bottom-0 inset-x-0 h-[8%] overflow-hidden flex justify-between items-center bg-white transition-all ' >
      { mobileMenuLinks.map(link => (
        <NavLink key={link.path} to={link.path} className="w-[25%] text-2xl h-full flex flex-col justify-center items-center hover:border-t-4 hover:font-extrabold hover:border-purple-800 hover:text-purple-900 hover:font-extrabold " >
          <link.Icon />
          <small className='text-xs' > {link.text} </small>
        </NavLink>
      )) }
    </div>
  )
}

export default MobileNav