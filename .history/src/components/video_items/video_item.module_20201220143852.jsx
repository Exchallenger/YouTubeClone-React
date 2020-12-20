import React from 'react';
import VideoImg from '../video_img/video_img.module';
import styles from './video_item.module.css'

const VideoItem = (props) => (

                <>
                    <div className={styles.chTitle}>{props.video.snippet.channelTitle}</div>
                    <div className={styles.title} >{props.video.snippet.title}</div>
                    <div className={styles.img}><VideoImg video={props.video}/></div>
                    </>         
);

export default VideoItem;