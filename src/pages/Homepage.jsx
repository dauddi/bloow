import React, { useState } from 'react'
import { useSongs } from '../../lib/hooks'
import banner from '../assets/images/banner.webp'
import SongCard from '../components/main/SongCard'

import { useSelector } from 'react-redux'

const Homepage = () => {
  const { songs: songsArray } = useSelector((state) => state.songs)

  return (
    <div className="pl-[150px]" >
      {/* <div className="w-[100%] ml-[10%] my-[1%]" >
        <img className="rounded-lg" src={banner} alt="bloow banner" />
      </div> */}
      <div className="p-[5%] text-center" >
        <h1 className="text-2xl text-yellow-700 font-extrabold " >Tracks</h1>
        <div className="w-full flex justify-center items-center " >
          { songsArray.map(song => <SongCard key={song.id} song={song} />) }
        </div>
      </div>
      
    </div>
  )
}

export default Homepage