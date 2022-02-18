import React, {useState, useEffect} from 'react'
import { SongTile } from "../components/main"
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { RiEmotionSadLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavoritesPlayAll, addSongToFavorites, playSong, pauseSong } from '../redux/slices/songsSlice'

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { activeSongInQueue, favorites } = useSelector(state => state.songs);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  useEffect(() => {
    setIsPlayingAll(favorites.isPlayingAll);
  }, [favorites, favorites.isPlayingAll]);

  const handlePlayAll = () => {
    dispatch(toggleFavoritesPlayAll("play"));
  }

  const handlePauseAll = () => {
    dispatch(toggleFavoritesPlayAll("pause"));
  }

  return (
    favorites.songs.length 
    ? <div className="w-full md:w-[60%]" >
        <div className=" flex flex-col justify-center items-start p-8 gap-5 bg-green-50 " >
          <h1 className="text-2xl font-extrabold text-indigo-900 " >Your Favorited Jams</h1>
          <div className="flex text-3xl justify-center items-center gap-3 " >
            { isPlayingAll ? <BsPauseCircleFill className="text-indigo-500 " onClick={handlePauseAll} /> : <BsPlayCircleFill className="text-gray-500" onClick={handlePlayAll} /> }
            <p className="text-lg font-semibold " > { isPlayingAll ? "Pause" : "Play All" } </p>
          </div>
        </div>

        <div className=" m-auto " >
          { favorites.songs.map(song => <SongTile key={song.id} song={song} activeSongInQueue={activeSongInQueue} dispatch={dispatch} favorites={favorites} addSongToFavorites={addSongToFavorites}  playSong={playSong} pauseSong={pauseSong}  /> ) }
        </div>
      </div> 
    
      : <div className="w-full flex flex-col justify-center items-center min-h-screen gap-5 text-gray-5s00 font-bold " >
          <RiEmotionSadLine className="text-7xl" />
          <p className="text-2xl" > You have no Favorited Songs </p>
    </div>
  )
}

export default FavoritesPage;