import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [video, setVideo] = useState([]);
  useEffect(()=>{
    const set = async() => await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI")
    .then(result =>setVideo(result.data));
    set();

  },[]);
  return <h1>{video}</h1>;

}


export default App;
