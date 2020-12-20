import React from 'react';

const VideoList = (props) => {
            let videos = props.video;

            const videolist = 
            videos.map((st)=>(st.snippet.title));
            console.log(videolist);


            return <h1>halo</h1>
};

export default VideoList;