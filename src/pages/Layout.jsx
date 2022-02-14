import React from 'react';
import { SidebarMenu, MobileNav } from '../features';
import { MusicPlayerWidget } from '../widgets'

import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { playQueue } = useSelector(state => state.songs)
  return (
    <div className="w-screen overflow-x-hidden" >
      <div className="w-full flex" >
        <div className="hidden md:flex sidebar top-0 left-0 bottom-0 w-[250px] text-white " >
          <SidebarMenu />
        </div>
        <div className="w-full" >
          { children }
        </div>
      </div>
      { playQueue.length && <div className="w-full fixed left-0 right-0 bottom-24 md:bottom-0 player h-[8%] md:h-[100px] bg-transparent text-slate-200">
        <MusicPlayerWidget />
      </div>}
      <MobileNav />
    </div>
  )
};

export default Layout;