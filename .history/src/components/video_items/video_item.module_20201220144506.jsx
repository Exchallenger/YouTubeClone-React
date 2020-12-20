import React from 'react';
import VideoImg from '../video_img/video_img.module';
import styles from './video_item.module.css'

const VideoItem = (props) => (

                <div className={styles.all}>  
                    <span className={styles.img}><VideoImg video={props.video}/></span>
                    <span className={styles.chTitle}>{props.video.snippet.channelTitle}</span>
                    <span className={styles.title} >{props.video.snippet.title}</span>
                </div>         
);

export default VideoItem;