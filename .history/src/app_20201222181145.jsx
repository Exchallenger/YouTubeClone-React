import './app.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar.module';
import VideoList from './components/video_list/video_list.module';



function App({youtube}) {
  let [video, setVideo] = useState([]);
  const getSearch = url => {
    youtube.search(url).then(setVideo);
  };
  useEffect(()=>{
    youtube.mostPopular().then(setVideo);
     },[]);



 
  return <i>
  <Navbar video={video} onSearch={getSearch} />
  <VideoList video={video}/>
 

}


export default App;
