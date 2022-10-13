
import './App.css';
import One from './assest/one.mp4'
import React, {useRef}   from 'react';

function App() {
  
  const videoRef =useRef();
  const handlePlay=()=>{
    videoRef.current.play();
  }
  const handlePause=()=>{
    videoRef.current.pause();
  }
  return (
    <>
    <div className='container'>
    <div class="card" style={{width:'50rem'}}>
    <video preload="auto" ref={videoRef} >
        <source src={One} type="video/mp4" />
      </video>
  <div class="card-body">
   <button className='btn-play' onClick={handlePlay}>play</button>
   <button className='btn-pause' onClick={handlePause}>pause</button>
  </div>
</div>
    </div>
   
    </>
  );
}

export default App;
