import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  let [video, setVideo] = useState();
  useEffect(()=>{
    axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI")
    .then(result => setVideo(JSON.stringify(result.data.items)));
    

  },[]);
  return <h1>{video}</h1>;

}


export default App;
