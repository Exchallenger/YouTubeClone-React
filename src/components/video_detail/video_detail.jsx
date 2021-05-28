import React from 'react';
import styled from 'styled-components';
import { trimText } from '../../common';


const Container = styled.div`
    padding-top: 80px;
    padding-left: 30px;
    @media screen and (max-width:1050px){
    padding-right: 30px;
  }
`;

const Title = styled.h2`
    color:white;
`;

const Date = styled.div`
    color: gray;
    font-size: 12px;
    margin-bottom: 8px;
    margin-left: 4px;
`;

const Channel = styled.h4`
    color: white;
`;

const Description = styled.h5`
    color:white;
`;

const Line = styled.div`
    background-color: gray;
    width: 100%;
    height: 1px;
`;

const VideoDetail = ({video}) => {
    console.log(video.id);
    return (
        <Container>
            <iframe 
            id="ytplayer" 
            type="text/html" 
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" 
            allowfullscreen>   
            </iframe>
            <Title>
                {video.snippet.title}
            </Title>
            <Date>
                {trimText(video.snippet.publishedAt)}
            </Date>
            <Line/>
            <Channel>
                {video.snippet.channelTitle}
            </Channel>
            <Description>
                {video.snippet.description}
            </Description>
            <Line/>

        </Container>
    );
};

export default VideoDetail;