import React, { useRef } from 'react';
import styled from 'styled-components';
import img from '../../images/profile.jpeg';


const width = window.screen.width;

const Container = styled.div`
    position: fixed;
  top: 0px;
  width: 100%;
`;

const Form = styled.form`
  height: 56px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(32,32,32);
  padding: 0px 24px 0px 12px;
`;

const Logo = styled.span`
  cursor: pointer;
`;

const LogoImg = styled.span`
    margin-left: 12px;
  color:red;
  font-size: 18px;
  @media screen and (max-width: 400px) {
    font-size:14px;
    margin-left: 6px;
  }
`;

const LogoName = styled.span`
color: white;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 8px 12px;
  @media screen and (max-width: 400px) {
    font-size:14px;
  }
  `;

const InputForm = styled.span`
  height: 30px;
  box-sizing: content-box;
  @media screen and (max-width: 750px) {
    width: 300px;
  }
`;

const Input = styled.input`
    /* margin-top: 4px; */
  color: white;
  background-color: rgb(19,19,19);
  /* border: 1px solid white; */
  width: ${width/3}px;
  outline: none;
  border:none;
  padding: 0px 8px;
  flex-basis: 50%;
  /* font-size: 14px; */
  height: 100%; 
  /* line-height: 2rem; */
  outline: none;
  @media screen and (max-width: 750px) {
    width: 120px;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  position: relative;
  top:1px;
  right: 0px;
  /* margin-top: 2px; */
  outline: none;
  height: 100%;
  margin: 0px;
  background-color: rgb(44, 44, 44);
  border: none;
  /* border: 1px solid white; */
  color: gray;
  font-size: 1rem;
  padding: 0px 8px;
`;

const ProfileContainer = styled.span`

`;

const Profile = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`;



const Navbar = ({onSearch,onClick}) => {
    const inputRef = useRef();
    const onSubmit = (event) =>{
        event.preventDefault();
        const name = inputRef.current.value;
        const key = process.env.REACT_APP_YOUTUBE_API_KEY;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&key=${key}`;
        onSearch(url);
    }
    const Clicked = () =>{
      onClick();
      inputRef.current.value = '';
    }


    return(
        <Container>
        <Form onSubmit={onSubmit}>
        <Logo onClick={Clicked}>
            <LogoImg><i className="fab fa-youtube"></i></LogoImg>
            <LogoName>ExchTube</LogoName>
        </Logo>
        <InputForm>
            <Input ref={inputRef} type="text" placeholder="검색"></Input>
            <Btn>
              <i className="fas fa-search"></i>
              
              </Btn>

        </InputForm>
        <ProfileContainer>
            <Profile src={img}></Profile>
        </ProfileContainer>
        </Form>
        </Container>
        );
};
            

export default Navbar;