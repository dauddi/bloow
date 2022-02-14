import React, { useState } from 'react'
import { useSongs } from '../../lib/hooks'
import banner from '../assets/images/banner.png'
import SongCard from '../components/main/SongCard'
import { BsSoundwave } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux'

const title = "Bloow";

const Homepage = () => {
  const { songs: songsArray } = useSelector((state) => state.songs)

  return (
    <div className="w-screen m-0 p-1" >
      <div className="flex justify-between items-center p-4 md:hidden" >
        <div className='flex gap-2 justify-center items-center text-purple-900 text-xl hover:text-purple-900 font-extrabold' >
          <BsSoundwave className='text-2xl' />
          <h1>Bloow Music</h1>
        </div>
        <div className='flex flex-col justify-center items-center text-2xl text-purple-900 ' >
          <CgProfile />
        </div>
      </div>
      <div className="w-full md:hidden">
        <img className="rounded-sm" src={banner} alt="bloow banner" />
      </div>
      <div className="mt-3" >
        <h1 className="text-xl m-2 md:text-lg text-purple-900 font-extrabold " >Top Tracks</h1>
        <div className="wrapper overflow-x-auto w-screen flex justify-start items-center" >
          { songsArray.map(song => <SongCard key={song.id} song={song} />) }
        </div>
      </div>
    </div>
  )
}

export default Homepage