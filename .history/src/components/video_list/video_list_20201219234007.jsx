import React from 'react';
import VideoItem from '../video_items/video_item';

const VideoList = (props) => (
    <ul>
        {props.video.map(video =><VideoItem key={video.id}  video={video}/> )}
        </ul>);

export default VideoList;