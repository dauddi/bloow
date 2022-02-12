import React from 'react';
import { SidebarMenu } from '../features';
import { MusicPlayerWidget } from '../widgets'

const Layout = ({ children }) => {
  return (
    <div className="w-screen" >
      <div className="w-full flex" >
        <SidebarMenu />
        { children }
      </div>
      <MusicPlayerWidget />
    </div>
  )
};

export default Layout;