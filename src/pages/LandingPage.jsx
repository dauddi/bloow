import React from 'react';
import { HeadphoneCanvas, AuthForm } from '../components/landingPage';

import { BsSoundwave } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { authenticate } from '../redux/slices/authSlice';
import { useDispatch } from "react-redux"
 
const Branding = () => {
  return (
    <>
      <div className='absolute top-5 left-5 flex font-extrabold text-2xl text-indigo-900 items-center justify-center gap-3 ' >
        <BsSoundwave />
        <h1> Bloow Music </h1>
      </div>

      <div className='absolute top-5 right-5 md:bottom-5 md:left-5 md:top-auto text-xl flex md:flex-col gap-5 z-10' >
        <FaLinkedin className='hover:cursor-pointer hover:text-indigo-900' />
        <FaGithub className='hover:cursor-pointer hover:text-indigo-900' />
      </div>
    </>
  )
}

const LandingPage = () => {
  const dispatch = useDispatch();

  return(
    <div className='landingPage min-h-screen '>
      <div >
        <Branding />
      </div>
      <div className='relative flex flex-col md:flex-row md:h-screen w-screen'>
        <div className="w-[100%] mt-5 md:mt-0 h-[350px] md:h-[100%] md:w-[60%] ">
          <HeadphoneCanvas />
        </div>
        <div className="w-[90%] mx-auto md-h[100%] md:w-[40%]" >
          <AuthForm dispatch={dispatch} authenticate={authenticate} />
        </div>
      </div>
    </div>
  )
};

export default LandingPage;
