import React, { useState, useEffect } from 'react'
import { MdFavorite, MdOutlineFavoriteBorder, MdCelebration } from "react-icons/md"
import { FaPlay, FaPause } from "react-icons/fa"

const SongTile = ({ song, activeSongInQueue, dispatch, favorites, addSongToFavorites, playSong, pauseSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (song.id === activeSongInQueue?.song.id) {
      setIsPlaying(activeSongInQueue.isPlaying);
    }
  }, [activeSongInQueue, activeSongInQueue.isPlaying])

  useEffect(() => {
    const prevState = isFavorite;
    if ( favorites.songs.some(track => track.id === song.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites.songs]);

  const handlePlay = () => {
    if (activeSongInQueue.isPlaying) dispatch(pauseSong());
    setTimeout(() => dispatch(playSong(song)), 100);
  }

  const handlePause = () => {
    dispatch(pauseSong());
  }

  return (
    <div className="flex m-2 p-4 justify-between border-b-2 border-gray-100 " >
      <div className="flex w-[80px] gap-4 " >
        <img src={song.cover} className="rounded-lg" alt="song cover" />
        <div className="flex flex-col items-center justify-center gap-2 " >
          <h1> {song.title} </h1>
          <p> {song.artist} </p>
        </div>
      </div>

      <div className="flex gap-3 justify-center items-center " >
        <div onClick={() => dispatch(addSongToFavorites(song))} >
          { isFavorite ? <MdFavorite className='text-green-600 text-2xl' /> : <MdOutlineFavoriteBorder className='text-2xl' /> }
        </div>
        <div>
          { isPlaying ? <FaPause onClick={handlePause} /> : <FaPlay onClick={handlePlay} /> }
        </div>
      </div>
    </div>
  )
}

export default SongTile