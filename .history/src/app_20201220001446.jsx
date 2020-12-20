import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/navbar.module';
import VideoList from './components/video_list/video_list';



function App() {
  let [video, setVideo] = useState([]);
  useEffect(()=>{
    axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI")
    .then(result => setVideo(result.data.items))
    

  },[]);
  return <>
  <Navbar/>
  <VideoList video={video}/>
  </>;

}


export default App;
