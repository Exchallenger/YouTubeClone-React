import React from 'react';
import styles from './video_img.module.css'

const VideoImg = (props) => {
    console.log(props.video.snippet.thumbnails.high.url);
    return(<h4>{props.video.snippet.thumbnails.high.url}</h4>);
}
    



export default VideoImg;