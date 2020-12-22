import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/navbar.module';
import VideoList from './components/video_list/video_list.module';
import Youtube from './service/youtube';



function App({youtube}) {
  let [video, setVideo] = useState([]);
  const getSearch = url => {
    youtube.search(url).then(console.log);
  };
  useEffect(()=>{
            youtube.mostPopular().then(setVideo);
            
     },[]);



 
  return <>
  <Navbar video={video} onSearch={getSearch} />
  <VideoList video={video}/>
  </>;

}


export default App;
