import React, { useState } from 'react'
import { useSongs } from '../../lib/hooks'
import banner from '../assets/images/banner.png'
import SongCard from '../components/main/SongCard'
import { useSelector } from 'react-redux'

const title = "Bloow";

const Homepage = () => {
  const { songs: songsArray } = useSelector((state) => state.songs)

  return (
    <div className="w-screen m-0 p-1" >
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