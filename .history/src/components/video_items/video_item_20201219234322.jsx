import React from 'react';

const VideoItem = (props) => (
    <>
                <h4>{props.video.snippet.channelTitle}</h4>
                <h4>{props.video.snippet.title}</h4>
                </>
                
                
);

export default VideoItem;