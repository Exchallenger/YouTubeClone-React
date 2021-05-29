import React, { createContext, useContext, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Aside from './components/aside/Aside';
import Navbar from './components/navbar/navbar.module';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list.module';


const Container = styled.div`

`;

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

export const UserTheme = createContext();


const App = ({youtube}) => {
  let [video, setVideo] = useState([]);
  const [selvideo, setSelVideo] = useState(null);

  const [theme, setTheme] =  useState('dark');
  const themeToggle = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

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
    <Container>
    <UserTheme.Provider value={theme}>
        <Navbar video={video} onSearch={getSearch} onClick={onClick}/>
        {!selvideo && <Aside theme={theme} themeToggle={themeToggle}/>}
        <Forflex
        style={{backgroundColor: theme==='light' ? 'rgb(249,249,249)':'rgb(23, 23, 23)'}}>
        {selvideo &&
         <DetailContainer><VideoDetail video={selvideo}/></DetailContainer>}
        <ListContainer
        style={{paddingLeft:selvideo? 0 : 32}}
        >
        <VideoList getDeliever={getDeliever} video={video}/>
        </ListContainer>
        </Forflex>
    </UserTheme.Provider>
    </Container>
  );
};

export default App;
