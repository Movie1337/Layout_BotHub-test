import React from "react";
import styled from "styled-components";
import BackgroundLights from "../images/bg-lights.png";
import BackgroundGrid from "../images/bg-grid.png";

const BackgroundImage = styled.div`
  position: absolute;
  top: -150px;
  left: 0px;
  z-index: 0;
`;

const Background = styled.div`
  position: absolute;
  top: -135px;
  left: -325px;
  z-index: -1;
`;

const MainContainer = styled.div`
  text-align: left;
  margin-top: 135.5px;
  width: 450px;
  margin-right: auto;
  z-index: 1;
`;

const Title = styled.h1`
  color: #ffffff;
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
    <Background>
      <img src={BackgroundGrid} alt="Задний фон"></img>
    </Background>
    <BackgroundImage>
      <img src={BackgroundLights} alt="Задний фон"></img>
    </BackgroundImage>
  </MainContainer>
);

export default MainContent;
