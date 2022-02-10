import React from 'react';
import { MainSection, SidebarMenu } from '../features';
import { MusicPlayerWidget } from '../widgets'

const Dasboard = () => {
  return (
    <div className="w-screen" >
      <div className="w-full flex" >
        <SidebarMenu />
        <MainSection />
      </div>
      <MusicPlayerWidget />
    </div>
  )
};

export default Dasboard;
