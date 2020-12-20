import React from 'react';
import styles from './video_img.module.css'


const VideoImg = (props) => <img src={props.video.snippet.thumbnails.high.url}></img>



export default VideoImg;