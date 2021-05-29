import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserTheme } from '../../app';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 72px;
    height: 100vh;
    position: fixed;
    top: 56px;
    left: 0;
    height: 100%;
    padding-top: 20px;
    @media screen and (max-width:400px){
        display: none;
    }
`;

const Btn = styled.button`
    font-size: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${props => props.context ==='light' ? 'black' : 'white'};
    `;

const Text = styled.span`
margin-bottom: 24px;
    font-size: 24px;
    text-align: center;
    color: ${props => props.context ==='light' ? 'black' : 'white'};
    font-size: 0.5rem;
`;

const Aside = ({theme,themeToggle}) => {
    const context = useContext(UserTheme);
    const [mode, setMode] = useState();
    useEffect(() =>{
        theme === 'light' ? setMode('다크') : setMode('라이트');
    },[theme])

    const onClick = () =>{
        if(theme ==='light'){
            setMode('다크');
            themeToggle();
        }else{
            setMode('라이트');
            themeToggle();
        }
    }
    return (
        <Container
        style={{backgroundColor: context==='light' ? 'white' :'rgb(32,32,32)'}}>
            <Btn context={context}>
            <i className="fas fa-home"></i>
            </Btn>
            <Text context={context}>홈</Text>
            <Btn onClick={onClick} context={context}>
            <i className="fas fa-adjust"></i>
            </Btn>
            <Text context={context}>{mode} 모드</Text>
        </Container>
    );
};

export default Aside;