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
  width: 450px;
  margin-right: auto;
  z-index: 1;

  @media (max-width: 834px) {
    width: 100%;
    text-align: center;
    margin-bottom: 45px;
  }

  @media (max-width: 375px) {
    width: 343px;
    text-align: center;
    margin-bottom: 38px;
  }
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

const StartButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;

  &:hover {
    background-color: #0056e0;
  }
`;

const MainContent = () => (
  <MainContainer>
    <Title>ChatGPT: ваш умный помощник</Title>
    <Description>
      Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN
      и абонентской платы. Создавайте контент, обрабатывайте данные и получайте
      ответы на вопросы через удобный интерфейс!
    </Description>
    <StartButton href="#">Начать работу</StartButton>
    <Background>
      <img src={BackgroundGrid} alt="Задний фон"></img>
    </Background>
    <BackgroundImage>
      <img src={BackgroundLights} alt="Задний фон"></img>
    </BackgroundImage>
  </MainContainer>
);

export default MainContent;
