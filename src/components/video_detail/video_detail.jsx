import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserTheme } from '../../app';
import { trimText } from '../../common';


const Container = styled.div`
    padding-top: 80px;
    padding-left: 30px;
    @media screen and (max-width:1050px){
    padding-right: 30px;
  }
`;

const Title = styled.h2`
    color: ${props => props.context ==='light' ? 'black' : 'white'};
`;

const Date = styled.div`
    color: gray;
    font-size: 12px;
    margin-bottom: 8px;
    margin-left: 4px;
`;

const Channel = styled.h4`
   color: ${props => props.context ==='light' ? 'black' : 'white'};
`;

const Description = styled.h5`
    color: ${props => props.context ==='light' ? 'black' : 'white'};
`;

const Line = styled.div`
    background-color: gray;
    width: 100%;
    height: 1px;
`;

const VideoDetail = ({video}) => {
    const context = useContext(UserTheme);    
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
            <Title context={context}>
                {video.snippet.title}
            </Title>
            <Date>
                {trimText(video.snippet.publishedAt)}
            </Date>
            <Line/>
            <Channel context={context}>
                {video.snippet.channelTitle}
            </Channel>
            <Description context={context}>
                {video.snippet.description}
            </Description>
            <Line/>

        </Container>
    );
};

export default VideoDetail;