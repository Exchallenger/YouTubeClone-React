import React from 'react';

const VideoList = (props) => {
            let videos = props.video;

            const videolist = 
            videos.map((st)=>(st.snippet.title)).join('\n');
            console.log(videolist);


            return( <>
            <h4>{videolist[0]}<br/></h4>
            </>);
};

export default VideoList;