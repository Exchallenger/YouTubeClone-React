import React from 'react';
import styles from './video_item.module.css'

const VideoItem = (props) => (
    <>
                <h4>{props.video.snippet.channelTitle}</h4>
                <h4>{props.video.snippet.title}</h4>
                </>
                
                
);

export default VideoItem;