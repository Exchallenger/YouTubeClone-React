import React from 'react';
import styles from './video_item.module.css'

const VideoItem = (props) => (
                <>
                    <h4 className={styles.h4}>{props.video.snippet.channelTitle}</h4>
                    <img src={props.video.thumbnails.default.url} alt=""/>
                    <h4>{props.video.snippet.title}</h4>
                </>             
);

export default VideoItem;