import React from 'react';
import styles from './video_img.module.css'


const VideoImg = (props) => <img src={props.video.snippet.thumbnails.medium.url}></img>



export default VideoImg;