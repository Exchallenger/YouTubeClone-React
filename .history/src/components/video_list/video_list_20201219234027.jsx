import React from 'react';
import VideoItem from '../video_items/video_item';

const VideoList = (props) => (
    <h4>
        {props.video.map(video =><VideoItem key={video.id}  video={video}/> )}
        </h4>);

export default VideoList;