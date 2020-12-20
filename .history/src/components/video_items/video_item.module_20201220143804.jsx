import React from 'react';
import VideoImg from '../video_img/video_img.module';
import styles from './video_item.module.css'

const VideoItem = (props) => (

                <>
                    <h3 className={styles.chTitle}>{props.video.snippet.channelTitle}</h3>
                    <h3 className={styles.title} >{props.video.snippet.title}</h3>
                    <h3 className={styles.img}><VideoImg video={props.video}/></h3>
                    </>         
);

export default VideoItem;