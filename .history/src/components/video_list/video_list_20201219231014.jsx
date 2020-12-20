import React from 'react';

const VideoList = (props) => {
            let videos = props.video;

            const videolist = 
            videos.map((st)=>(st.snippet.title));
            console.log(videolist);


            return <h4>{videolist}</h4>
};

export default VideoList;