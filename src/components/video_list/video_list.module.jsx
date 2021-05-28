import React from 'react';
import styled from 'styled-components';
import VideoItem from '../video_items/video_item.module';


const UL = styled.ul`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  text-align: center;
  @media screen and (max-width:400px){
    padding-left: 0px;
  }
  
`;

const VideoList = ({getDeliever,video}) => {
  const onVideo = (vi) => {
      getDeliever(vi);
  }
  return(    
      <UL>
          {video.map(video =><VideoItem onVideo={onVideo} key={video.id}  video={video}/> )}
      </UL>);
      };

export default VideoList;