import React, { useEffect, useRef, useState } from 'react';
import './product.css';
import Header from './Header';
import { songData } from './DataSongs';
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaPlay, FaPause } from "react-icons/fa";
import { GrChapterPrevious, GrChapterNext } from "react-icons/gr";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdReplay10, MdForward10, MdOutlineSettings } from "react-icons/md";

import { IoVolumeMuteOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProductPage = () => {
  const [control,setControl]=useState(false)
  const [filterData, setFilterData] = useState("");
  const [language, setLanguage] = useState('All');
  const [audioSrc, setAudioSrc] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [mute,setMute]=useState(true)
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [Title, setTitle] = useState('No songs selected');

  const filtered = songData.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(filterData.toLowerCase()) ||
      item.category.toLowerCase().includes(filterData.toLowerCase()) ||
      item.singer.toLowerCase().includes(filterData.toLowerCase());

    const matchesLanguage = language === 'All' || language.toLowerCase() === item.category.toLowerCase();

    return matchesSearch && matchesLanguage;
  });

 
  const playPause = (song, index) => {
    if (song) {
      setCurrentIndex(index);
      setTitle(song.title);

      if (audioSrc === song.song) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
          setControl(true)
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        setAudioSrc(song.song);
        setIsPlaying(true);
        setControl(true)
      }
    } else {
      if (!audioSrc) return;

      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true)
        setControl(true)
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const nextSong = () => {
    if (currentIndex !== null) {
      let nextIndex = (currentIndex + 1) % filtered.length;
      const next = filtered[nextIndex];
      playPause(next, nextIndex);
    }
  };

  const prevSong = () => {
    if (currentIndex !== null) {
      let prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
      const prev = filtered[prevIndex];
      playPause(prev, prevIndex);
    }
  };

  const formatTime = (sec) => {
    if (isNaN(sec)) return "00:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };


  const updateMute=()=>{
    
    const audioEl=audioRef.current
    if (audioEl.muted){
     audioEl.muted=false
     setMute(true)
    }else{
     audioEl.muted=true
     setMute(false)
    }
     
  }
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const onLoadedMetadata = () => {
      setDuration(audioEl.duration);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audioEl.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      nextSong(); // Auto-play next song when current ends
    };

    audioEl.addEventListener('loadedmetadata', onLoadedMetadata);
    audioEl.addEventListener('timeupdate', onTimeUpdate);
    audioEl.addEventListener('ended', onEnded);

    if (audioSrc) {
      audioEl.load();
      audioEl.play();
      setIsPlaying(true);
    }

    return () => {
      audioEl.removeEventListener('loadedmetadata', onLoadedMetadata);
      audioEl.removeEventListener('timeupdate', onTimeUpdate);
      audioEl.removeEventListener('ended', onEnded);
    };


    
  }, [audioSrc]);


  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const change=useRef(null)
  const [value,setValue]=useState(100)

const [showRate,setShowRate]=useState(false)
  return (
    <div>
    <Header/>
      <div className='product-page'>
        <div className='search-bar-container'>
          <div className='search-bar'>
            <input
              type='text'
              value={filterData}
              placeholder='Search here..'
              onChange={(e) => setFilterData(e.target.value)}
            />
            <span><CiSearch /></span>
          </div>
          <div className='category-container'>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value='All'>All Languages</option>
              <option value="Kannada">Kannada</option>
              <option value="Telegu">Telegu</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>

        <div className='product-container'>
          <div className="product">
            {filtered.map((item, index) => (
              <div key={index} className='songs-container'>
                <div className='img-container'>
                  <img
                    onClick={() => playPause(item, index)}
                    src={item.img}
                    alt={item.title}
                    style={{ cursor: 'pointer' }}
                  />
                 
                </div>
                <div className="song_info">
                  <h3>{item.title}</h3>
                  <p style={{lineHeight:'0'}}>{item.singer}</p>
                </div>
                <button className="heart"><CiHeart /></button>
              </div>
            ))}
          </div>
        </div>

        {/* Single audio element */}
        <audio ref={audioRef} src={audioSrc}   />

     {control && (   <div className='controls-container' >
          <marquee style={{ lineHeight: "0.2", padding: '0' }} behavior="" direction="right">
            <p>{Title}</p>
          </marquee>
          <div className="range">
            <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
            <input
              type='range'
              min='0'
              max={duration ? duration : 0}
              value={currentTime}
              onChange={handleSeek}
              step="0.01"
            />
          </div>
          <div className='play-tools-container'>
            <button className='bg' onClick={prevSong}><GrChapterPrevious /></button>
            <button className='bg' onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime -= 10;
                setCurrentTime(audioRef.current.currentTime);
              }
            }}>
              <MdReplay10 />
            </button>
            <button className='play-pause' onClick={() => playPause()}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className='bg' onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime += 10;
                setCurrentTime(audioRef.current.currentTime);
              }
            }}>
              <MdForward10 />
            </button>
            <button className='bg' onClick={nextSong}><GrChapterNext /></button>

          <input
  type="range"
  value={value}
  onChange={(e) => {
    const newValue = e.target.value;
    setValue(newValue);
    audioRef.current.volume = newValue / 100; 
  }}
  ref={change}
  max="100"
  min="0"
/>

            {console.log(value)}
            <button className='bg' onClick={updateMute}>{mute ? 
              <HiOutlineSpeakerWave />:<IoVolumeMuteOutline /> }</button>
           
            <button className='bg'  onClick={()=>setShowRate(true)}><MdOutlineSettings /></button>
            {showRate &&(

            <div  className='rate-btn-container'>
              
             <div className="rate-btn">
            <button onClick={()=>setShowRate(false)}><FaArrowLeftLong /> &nbsp;Options</button>
            <button onClick={()=>{
              const newRate=0.25
            
              audioRef.current.playbackRate=newRate
            }}>0.25</button>
            <button onClick={()=>{
              const newRate=0.5
            
              audioRef.current.playbackRate=newRate
            }}>0.5</button>
        
            <button onClick={()=>{
              const newRate=0.75
            
              audioRef.current.playbackRate=newRate
            }}>0.75</button>

    <button onClick={()=>{
              const newRate=1
            
              audioRef.current.playbackRate=newRate
            }}>Normal</button>

                <button onClick={()=>{
              const newRate=1.25
            
              audioRef.current.playbackRate=newRate
            }}>1.25</button>


                <button onClick={()=>{
              const newRate=1.5
            
              audioRef.current.playbackRate=newRate
            }}>1.5</button>
                <button onClick={()=>{
              const newRate=2
            
              audioRef.current.playbackRate=newRate
            }}>2</button>
            </div>
          </div>
            )}
          </div>
        </div>
     )}
      </div>
          
    </div>
  );
};

export default ProductPage;
