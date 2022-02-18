import React, { useState } from 'react'
import { useSongs } from '../../lib/hooks'
import banner from '../assets/images/banner.png'
import { SongCard, SongTile } from '../components/main'
import { useSelector, useDispatch } from 'react-redux'
import { playSong, pauseSong } from "../redux/slices/songsSlice"
import { addSongToFavorites } from '../redux/slices/songsSlice'

const Homepage = () => {
  const dispatch = useDispatch();
  const { songs: songsArray, activeSongInQueue, favorites } = useSelector((state) => state.songs);

  return (
    <div className="w-screen m-0 p-1" >
      <div className="w-full md:hidden">
        <img className="rounded-sm" src={banner} alt="bloow banner" />
      </div>

      <div className="mt-3" >
        <h1 className="text-xl m-2 md:text-lg text-purple-900 font-extrabold " >Top Tracks</h1>
        <div className="wrapper overflow-x-auto w-screen flex justify-start items-center" >
          { songsArray.map(song => <SongCard key={song.id} song={song} activeSongInQueue={activeSongInQueue} playSong={playSong} pauseSong={pauseSong} />) }
        </div>
      </div>

      <div className="w-[100%] md:w-[50%] p-4 " >
        <h1 className="text-xl m-2 md:text-lg text-purple-900 font-extrabold " >Tracks Of The Week</h1>
        <div className="bg-gray-50 rounded-md shadow-lg " >
          { songsArray.map(song => <SongTile key={song.id} song={song} activeSongInQueue={activeSongInQueue} dispatch={dispatch} favorites={favorites} addSongToFavorites={addSongToFavorites}  playSong={playSong} pauseSong={pauseSong} />) }
        </div>
      </div>

    </div>
  )
}

export default Homepage