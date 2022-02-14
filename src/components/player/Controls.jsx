import React from 'react'
import { BsPlayCircleFill, BsPauseCircleFill, BsFillSkipBackwardCircleFill, BsFillSkipForwardCircleFill, BsStopCircleFill } from "react-icons/bs"

import { useDispatch, useSelector } from 'react-redux'
import { playSong, pauseSong } from '../../redux/slices/songsSlice'

const Controls = ({ isPlaying, activeSongInQueue }) => {
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(playSong(activeSongInQueue.song));
  }
  const handlePause = () => {
    dispatch(pauseSong());
  }
  return (
    <div className="flex text-3xl" >
      <BsFillSkipBackwardCircleFill className="playerControls " />
      <div>
        { isPlaying
        ? <BsPauseCircleFill onClick={handlePause} className="playerControls"/> 
        : <BsPlayCircleFill onClick={handlePlay} className="playerControls" /> }
      </div>
      <BsFillSkipForwardCircleFill className="playerControls" />
    </div>
  )
}

export default Controls;