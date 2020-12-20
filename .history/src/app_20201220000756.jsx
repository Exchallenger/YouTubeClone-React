import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from './components/video_list/video_list.module';
import Navbar from './components/navbar/navbar.module';


function App() {
  let [video, setVideo] = useState([]);
  useEffect(()=>{
    axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI")
    .then(result => setVideo(result.data.items))
    .then(result =>console.log(result))
    

  },[]);
  return <>
  <Navbar/>
  <VideoList video={video}/>
  </>;

}


export default App;
