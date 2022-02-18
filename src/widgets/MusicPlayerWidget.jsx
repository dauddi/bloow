import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong, pauseSong } from '../redux/slices/songsSlice';
import { Controls } from '../components/player';
import { musicPlayerDurationHandler } from '../../lib/functions';

const MusicPlayerWidget = () => {
  //redux state slice selector hook
  const { activeSongInQueue, playQueue } = useSelector(state => state.songs);

  //states
  const [playingSong, setPlayingSong] = useState(activeSongInQueue ? activeSongInQueue : {});
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  //references
  const audioPlayer = useRef();
  const progressBarRef = useRef();
  const rangeInput = useRef();
  const currentTimeRef = useRef()
  const sliderAnimationRef = useRef();
  const timeAnimationRef = useRef();

  //manage audio controls
  useEffect(() => {
    setPlayingSong(activeSongInQueue.song);
    setIsPlaying(activeSongInQueue.isPlaying);
    if (activeSongInQueue.isPlaying) {
      audioPlayer.current.play()
      sliderAnimationRef.current = requestAnimationFrame(sliderPlaybackAnimation);
      timeAnimationRef.current = requestAnimationFrame(updatePlaybackTimeAnimation);
    } else {
      audioPlayer?.current?.pause();
      cancelAnimationFrame(sliderPlaybackAnimation);
      cancelAnimationFrame(updatePlaybackTimeAnimation);
    }
  }, [activeSongInQueue, activeSongInQueue.isPlaying]);

  const changePlayerCurrentTime = () => {
    const rangePosition = (audioPlayer.current.currentTime * 100) / audioPlayer.current.duration;
    rangeInput.current.value = rangePosition;
    progressBarRef.current.style.width = rangeInput.current.value + "%";
  }

  const sliderPlaybackAnimation = () => {
    changePlayerCurrentTime();
    sliderAnimationRef.current = requestAnimationFrame(sliderPlaybackAnimation);
  }

  const updatePlaybackTimeAnimation = () => {
    currentTimeRef.current.value = musicPlayerDurationHandler(audioPlayer.current.currentTime);
    setCurrentTime(musicPlayerDurationHandler(audioPlayer.current.currentTime))
    setDuration(musicPlayerDurationHandler(audioPlayer.current.duration));
    timeAnimationRef.current = requestAnimationFrame(updatePlaybackTimeAnimation);
  }

  //handle slider onchange event
  const handleSliderChange = (e) => {
    changePlayerCurrentTime();
  }

  return (
    //audio player component
    <div className="w-screen relative flex md:p-4 justify-between items-center bg-slate-800 md:bg-transparent " >
      {/* displays music cover , title and artist name */}
      <div className="md:absolute md:inset-y-0 md:left-0 flex w-[70%] md:w-[25%] " >
        <img src={ playingSong.cover } className="w-[80px] h-[80px] p-0 md:w-[100px] md:h-[100px] odject-contain object-center " alt="vinyl image" />
        <div className="flex flex-col justify-start m-1 md:ml-4">
          <h4 className="p-1 m-0 md:p-2 font-extrabold text-slate-300 " > { playingSong.title } </h4>
          <p className=" text-xs md:text-sm px-2 text-yellow-600 font-bold " > { playingSong.metadata?.artist } </p>
        </div>
      </div>
      {/* displays the controls and music slider  */}
      <div className="flex flex-col relative justify-start items-center md:ml-[25%] w-[30%] md:w-[40%]" >
        <audio ref={audioPlayer} src={activeSongInQueue.song.link} preload="metadata" />
        <Controls activeSongInQueue={activeSongInQueue} isPlaying={isPlaying} />
        <div className="hidden w-full md:flex justify-center items-center " >
          <div ref={currentTimeRef} className="duration" > { currentTimeRef?.current?.value } </div>
          <div className="w-full relative bg-red-200 h-2 rounded-full " >
            <div ref={progressBarRef} className={`absolute top-0 left-0 bg-slate-800 h-2 rounded-full appearance-none`} ></div>
            <input ref={rangeInput} defaultValue={0} type="range" className="slider"  />
          </div>
          <div className="duration" > { duration } </div>
        </div>
      </div>
      {/* displays volume controls, songs in queue and extra controls  */}
      <div className="hidden md:flex items-end w-[25%]" >
        extras
      </div>
    </div>
  )
};

export default MusicPlayerWidget;
