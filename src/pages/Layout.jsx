import React from 'react';
import { SidebarMenu, MobileNav, MobileHeader } from '../features';
import { MusicPlayerWidget } from '../widgets'

import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { playQueue } = useSelector(state => state.songs)
  return (
    <div className="w-screen overflow-x-hidden" >
      <div className="w-full flex" >
        <div className="hidden md:flex md:fixed bg-indigo-900 top-0 left-0 p-4 bottom-0 w-[300px] text-white " >
          <SidebarMenu />
        </div>
        <div className="w-full md:ml-[300px]" >
          <div className='md:hidden' >
            <MobileHeader />
          </div>
          { children }
        </div>
      </div>
      { playQueue.length && <div className="w-full fixed left-0 right-0 bottom-20 md:bottom-0 h-[8%] md:h-[100px] bg-indigo-700 text-slate-200">
        <MusicPlayerWidget />
      </div>}
      <MobileNav />
    </div>
  )
};

export default Layout;