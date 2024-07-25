import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  text-align: left;
  margin: auto 0;
  width: 450px;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
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

  &:hover {
    background-color: #0056e0;
  }
`;

const MainContent = () => (
  <MainContainer>
    <Title>ChatGPT: ваш умный помощник</Title>
    <Description>
      Эксперементируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN
      и абонентской платы. Создавайте контент, обрабатывайте данные и получайте
      ответы на вопросы через удобный интерфейс!
    </Description>
    <StartButton>Начать работу</StartButton>
  </MainContainer>
);

export default MainContent;
