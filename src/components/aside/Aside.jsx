import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 72px;
    height: 100vh;
    position: fixed;
    top: 56px;
    left: 0;
    background-color: rgb(32,32,32);
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
    color: white;
    `;

const Text = styled.span`
margin-bottom: 24px;
    font-size: 24px;
    text-align: center;
    color: white;
    font-size: 0.5rem;
`;

const Aside = () => {
    const [mode, setMode] = useState('다크');

    const onClick = () =>{
        if(mode ==='다크'){setMode('라이트');}
        else if(mode ==='라이트'){setMode('다크')}
    }
    return (
        <Container>
            <Btn>
            <i className="fas fa-home"></i>
            </Btn>
            <Text>홈</Text>
            <Btn onClick={onClick}>
            <i className="fas fa-adjust"></i>
            </Btn>
            <Text>{mode} 모드</Text>
            
        </Container>
    );
};

export default Aside;