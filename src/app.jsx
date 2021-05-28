import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aside from './components/aside/Aside';
import Navbar from './components/navbar/navbar.module';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list.module';

const Forflex = styled.div`
  display: flex;
  @media screen and (max-width:1130px){
    flex-direction: column;
  }
`;
const DetailContainer = styled.div`
  flex: 1 1 70%;
`;

const ListContainer = styled.div`
  flex: 1 1 30%;
`;

const App = ({youtube}) => {
  let [video, setVideo] = useState([]);
  const [selvideo, setSelVideo] = useState(null);
  const getSearch = url => {
    youtube.search(url).then(setVideo);
  };
  useEffect(()=>{
    youtube.mostPopular().then(setVideo);
     },[]);
  const onClick = () => {
    setVideo([]);
    youtube.mostPopular().then(setVideo);
    setSelVideo(null);
  }
  const getDeliever =(vi) =>{
    setSelVideo(vi);
  }
  return (
    <>
        <Navbar video={video} onSearch={getSearch} onClick={onClick}/>
        {!selvideo && <Aside/>}
        <Forflex>
        {selvideo &&
         <DetailContainer><VideoDetail video={selvideo}/></DetailContainer>}
        <ListContainer
        style={{paddingLeft:selvideo? 0 : 32}}
        >
        <VideoList getDeliever={getDeliever} video={video}/>
        </ListContainer>
        </Forflex>
    </>
  );
};

export default App;
