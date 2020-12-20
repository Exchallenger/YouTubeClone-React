import React from 'react';
import VideoItem from '../video_items/video_item';
import styles from './video_list.module.css'

const VideoList = (props) => (
    <ul>
        {props.video.map(video =><VideoItem key={video.id}  video={video}/> )}
        </ul>);

export default VideoList;