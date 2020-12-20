import React from 'react';
import VideoImg from '../video_img/video_img.module';
import styles from './video_item.module.css'

const VideoItem = (props) => (

                <>
                    <h4 className={styles.h4}>{props.video.snippet.channelTitle}</h4>
                    <h4>{props.video.snippet.title}</h4>
                    <h4><VideoImg video={video}/></h4>
                    </>         
);

export default VideoItem;