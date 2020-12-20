import React from 'react';
import styles from './video_img.module.css'

const VideoImg = (props) => {
    console.log(props.video.thumbnails);
    return(<h4>{props.video.thumbnails}</h4>);
}
    



export default VideoImg;