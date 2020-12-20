import React from 'react';

const VideoList = (props) => {
            const a = props.video;
            a.map((result)=>result.title);
            console.log(a);


            return <h1>halo</h1>
};

export default VideoList;