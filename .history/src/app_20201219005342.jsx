import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [video, setVideo] = useState([]);
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhKF5ee0oCI2BIL1BmPi9AklSFiJUXnuI", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  },[]);
  return <h1>{video}</h1>

}


export default App;
