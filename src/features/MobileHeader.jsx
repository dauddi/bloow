import React from 'react'
import { BsSoundwave } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const MobileHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 md:hidden shadow-md " >
      <div className='flex gap-2 justify-center items-center text-purple-900 text-xl hover:text-purple-900 font-extrabold' >
        <BsSoundwave className='text-2xl' />
        <h1>Bloow Music</h1>
      </div>
      <div className='flex flex-col justify-center items-center text-2xl text-purple-900 ' >
        <CgProfile />
      </div>
  </div>
  )
}

export default MobileHeader;