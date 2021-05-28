import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: transparent;
  margin: 28px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 15%;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 200ms ease-in;
  cursor: pointer;

  &:hover{
    border: 1px solid white;
  }
`;

const Img = styled.img`
margin-bottom: 6px;
`;

const ChTitle = styled.span`
color: gray;
  margin: 4px 0px;
`;


const Title = styled.span`
font-size: 1.1rem;
  color: white;
  margin: 4px 0px;
`;

const VideoItem = ({video,onVideo}) => {
        return(
        <Container onClick={() => onVideo(video)}>  
            <Img src={video.snippet.thumbnails.medium.url}></Img>
            <Title>{video.snippet.title}</Title>
            <ChTitle>{video.snippet.channelTitle}</ChTitle>
        </Container>         
        );
        };

export default VideoItem;