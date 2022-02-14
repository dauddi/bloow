import React, { useState, useEffect, useCallback } from 'react'

import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { playSong, pauseSong } from '../../redux/slices/songsSlice'

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const { activeSongInQueue } = useSelector(state => state.songs);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if ( song.id === activeSongInQueue?.song.id) {
      setIsPlaying(activeSongInQueue.isPlaying);
    }
  }, [activeSongInQueue, activeSongInQueue.isPLaying])

  return (
    <div key={song.id} className="relative flex flex-col w-[20%] m-4 hover:scale-105 transition-all " >
      <img src={song.cover} alt={`${song.title} album cover image`} />
      <div className="absolute inset-0 text-7xl transition-all text-green-200 " >
        { !isPlaying && <BsPlayCircleFill onClick={() => {
            if (activeSongInQueue.isPlaying) dispatch(pauseSong());
            setTimeout(() => dispatch(playSong(song)), 100)
          }} className="absolute bottom-[5%] left-[5%] hover:cursor-pointer hover:text-green-300" /> } 
        { isPlaying && <BsPauseCircleFill onClick={() => dispatch(pauseSong())} className="absolute bottom-[5%] left-[5%] hover:cursor-pointer hover:text-green-300" /> }
      </div>
  </div>
  )
}

export default SongCard