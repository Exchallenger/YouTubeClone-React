import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/navbar.module';
import VideoList from './components/video_list/video_list.module';
import Youtube from './service/youtube';



function App({youtube}) {
  let [video, setVideo] = useState([]);
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getSearch = url => {
    axios.get(url)
    .then(items=>setVideo(items.data.items))};
  useEffect(()=>{
    // axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=${key}`)
    // .then(result => setVideo(result.data.items))
    youtube.mostPopular();
     },[]);



 
  return <>
  <Navbar video={video} onSearch={getSearch} />
  <VideoList video={video}/>
  </>;

}


export default App;
