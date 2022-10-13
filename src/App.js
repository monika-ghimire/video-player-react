
import './App.css';
import One from './assest/One.mp4'
import two from './assest/two.mp4'
import three from './assest/three.mp4'
import four from './assest/four.mp4'
import React, {useRef,useState}   from 'react';


function App() {
  // const [count, setCount] = useState(1);
  //  const videoList=[{id:1,src:One},
  //    {id:2,src:two},
  //    {id:3,src:three},
  //   {id:4,src:four}
  // ]
  // let {...id}=videoList.id

 
  const videoRef =useRef();
  const handlePlay=()=>{
    videoRef.current.play();
  }
  const handlePause=()=>{
    videoRef.current.pause();
  }
  // const nextBtn=()=>{
  //   setCount()
  // }
  return (
    <>
    <div className='container'>
    <div class="card" style={{width:'50rem'}}>
    <video preload="auto" ref={videoRef} >
    <source src={two} type="video/mp4" />
  </video>
 
  <div class="card-body">
    <button>back</button>
   <button className='btn-play' onClick={handlePlay}>play</button>
   <button className='btn-pause' onClick={handlePause}>pause</button>
   <button>Next</button>
  </div>
</div>

    </div>
   
    </>
  );
}

export default App;
