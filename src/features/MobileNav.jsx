import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiSearch, FiHeart, FiUpload, FiSettings } from "react-icons/fi";

const mobileMenuLinks = [
  {Icon: FiHome, text: 'Home', path: '/'},
  {Icon: FiSearch, text: 'Search', path: '/search'},
  {Icon: FiHeart, text: 'Fovorites', path: '/favorites'},
  {Icon: FiUpload, text: 'Upload', path: '/upload'},
 ]

const MobileNav = () => {
  const location = useLocation();
  return (
    <div className='md:hidden w-screen border-t-[1px] shadow-md border-gray-200 fixed bottom-0 inset-x-0 h-[8%] overflow-hidden flex justify-between items-center bg-white transition-all ' >
      { mobileMenuLinks.map(link => {
        const isActive = link.path === location.pathname;
        return (
          <Link key={link.path} to={link.path} className={`w-[25%] text-2xl h-full flex flex-col justify-center items-center  ${ isActive ? "text-purple-900 font-extrabold border-t-4 border-purple-800" : null}  `} >
            <link.Icon />
            <small className='text-xs' > {link.text} </small>
          </Link>
        )
      }) }
    </div>
  )
}

export default MobileNav