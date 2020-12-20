import React from 'react';
import VideoImg from '../video_img/video_img.module';
import styles from './video_item.module.css'

const VideoItem = (props) => (

                <div className={styles.all}>  
                    <img className={styles.img} src={props.video.snippet.thumbnails.medium.url}></img>
                    <span className={styles.chTitle}>{props.video.snippet.channelTitle}</span>
                    <span className={styles.title} >{props.video.snippet.title}</span>
                </div>         
);

export default VideoItem;