import React,{ useState } from 'react'
import { BsPlayCircleFill, BsPauseCircleFill, BsFillSkipBackwardCircleFill, BsFillSkipForwardCircleFill, BsStopCircleFill } from "react-icons/bs"
import { MdFavorite, MdOutlineFavoriteBorder, MdCelebration } from "react-icons/md"
import { FaPlay, FaPause } from "react-icons/fa"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux'
import { playSong, pauseSong } from '../../redux/slices/songsSlice'

const MobileControls = ({ isPlaying, isFavorite, toggleFavorite, handlePause, handlePlay }) => {
  return (
    <div className='md:hidden flex gap-6 text-2xl justify-start items-center transition-all ' >
      <div onClick={toggleFavorite} > 
        {isFavorite ? <MdFavorite className='text-green-600 text-3xl' /> : <MdOutlineFavoriteBorder className='text-3xl' /> }
      </div>
      { isPlaying ? <FaPause onClick={handlePause} /> : <FaPlay  onClick={handlePlay} /> }
    </div>
  )
}

const Controls = ({ isPlaying, activeSongInQueue }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false)

  const handlePlay = () => {
    dispatch(playSong(activeSongInQueue.song));
  }
  const handlePause = () => {
    dispatch(pauseSong());
  }

  const toggleFavorite = () => {
    const prevState = isFavorite;
    setIsFavorite(!prevState);
    prevState ? toast.error("🙍 Removed from favorites", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: "",
      }
    ) : toast.success("🎉 Added to favorites", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: "",
    })
  }

  return (
    <div className='h-full flex justify-start' >
      <MobileControls handlePause={handlePause} handlePlay={handlePlay} isPlaying={isPlaying} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <div className="hidden md:flex text-3xl" >
        <BsFillSkipBackwardCircleFill className="playerControls " />
        <div>
          { isPlaying
          ? <BsPauseCircleFill onClick={handlePause} className="playerControls"/>
          : <BsPlayCircleFill onClick={handlePlay} className="playerControls" /> }
        </div>
        <BsFillSkipForwardCircleFill className="playerControls" />
      </div>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  )
}

export default Controls;