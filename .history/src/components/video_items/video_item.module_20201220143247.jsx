import React from 'react';
import VideoImg from '../video_img/video_img.module';
import styles from './video_item.module.css'

const VideoItem = (props) => (

                <>
                    <span className={styles.h4}>{props.video.snippet.channelTitle}</span>
                    <span>{props.video.snippet.title}</span>
                    <span><VideoImg video={props.video}/></span>
                    </>         
);

export default VideoItem;