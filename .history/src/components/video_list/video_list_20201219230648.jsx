import React from 'react';

const VideoList = (props) => {
            let a = props.video;

            const b = a.map((st)=>st.snippet.title);
            console.log(b);


            return <h1>halo</h1>
};

export default VideoList;