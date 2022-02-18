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

  const handlePlay = () => {
    if (activeSongInQueue.isPlaying) dispatch(pauseSong());
    setTimeout(() => dispatch(playSong(song)), 100);
  }

  const handlePause = () => {
    dispatch(pauseSong());
  }

  return (
    <figure key={song.id} className="relative flex flex-col min-w-[180px] min-h-[180px] ml-2 md:w-[15%] md:m-4 hover:scale-105 transition-all " > 
      <img src={song.cover} className="rounded-md" alt={`${song.title} album cover image`} />
      <figcaption className="absolute inset-x-0 bottom-0 h-10 bg-black bg-opacity-20 text-3xl hover:text-5xl transition-all " >
        { !isPlaying && <BsPlayCircleFill onClick={handlePlay} className="absolute bottom-1.5 right-[5%] hover:cursor-pointer text-gray-100" /> } 
        { isPlaying && <BsPauseCircleFill onClick={handlePause} className="absolute bottom-1.5 right-[5%] hover:cursor-pointer text-green-300" /> }
      </figcaption>
    </figure>
  )
}

export default SongCard