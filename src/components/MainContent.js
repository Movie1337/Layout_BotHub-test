// src/components/MainContent.js
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  text-align: center;
  margin: 50px 0;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #c0c0c0;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MainContent = () => (
  <MainContainer>
    <Title>ChatGPT: ваш умный помощник</Title>
    <Description>
      Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте.
      Создавайте контент, общайтесь...
    </Description>
    <StartButton>Начать работу</StartButton>
  </MainContainer>
);

export default MainContent;
