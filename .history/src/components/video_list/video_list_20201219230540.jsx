import React from 'react';

const VideoList = (props) => {
            let a = [...props.video];

            a.map((st)=>st.snippet);
            console.log(a);


            return <h1>halo</h1>
};

export default VideoList;