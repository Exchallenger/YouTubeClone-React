import './app.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [video, setVideos] = useState([]);
  useEffect(()=>{
    console.log('useEffect');
  },[]);
  return <h1>Hello</h1>;
};

export default App;
