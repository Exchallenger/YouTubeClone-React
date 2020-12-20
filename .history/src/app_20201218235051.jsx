import './app.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [video, setVideos] = useState([]);
  useEffect(()=>{
    console.log('useEffect');
  },[]);
};

export default App;
