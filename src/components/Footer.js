import React from "react";
import styled from "styled-components";
import imageAlri from "../images/alri.png";
import iconTelegram from "../icons/Icon-telegram.png";
import iconRobot from "../icons/icon-robot.png";
import iconEmail from "../icons/icon-email.png";
import iconBlog from "../icons/icon-blog.png";
import iconHabr from "../icons/icon-habr.png";

const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  width: 100%;
  color: #c0c0c0;
`;

const Container = styled.div`
  width: 1290px;
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 0 auto;
  padding: 65px 0;

  @media (max-width: 834px) {
    width: 754px;
    flex-direction: column;
    align-items: left;
    padding: 56px 40px;
  }

  @media (max-width: 375px) {
    padding: 44px 16px;
  }
`;

const SectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  min-width: 196px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;

  span {
    background-color: #0066ff;
    border-radius: 3px;
    margin-left: 5px;
    font-weight: bold;
    padding: 0 3px;
    margin-right: 25px;
  }
`;

const LegalInfo = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  gap: 12px;
`;

const LegalItem = styled.div`
  margin-bottom: 12px;
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: rgba(97, 109, 141, 1);
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }

  a {
    color: #c0c0c0;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Section>
          <Logo>
            Bot<span>hub</span>
          </Logo>
          <LegalInfo>
            <LegalItem>ООО «Ботхаб» ОГРН 1236300016259</LegalItem>
            <LegalItem>@BotHub 2023</LegalItem>
            <LegalItem>Пользовательское соглашение</LegalItem>

            <img src={imageAlri} alt="Герб"></img>
          </LegalInfo>
        </Section>
        <SectionInfo>
          <Section>
            <SectionTitle>Информация</SectionTitle>
            <LinkList>
              <LinkItem>
                <a href="#main">Главная страница</a>
              </LinkItem>
              <LinkItem>
                <a href="#tariffs">Тарифы</a>
              </LinkItem>
              <LinkItem>
                <a href="#contacts">Контакты</a>
              </LinkItem>
              <LinkItem>
                <a href="#features">Наши возможности</a>
              </LinkItem>
              <LinkItem>
                <a href="#models">Модели нейросетей</a>
              </LinkItem>
              <LinkItem>
                <a href="#about">О Нас</a>
              </LinkItem>
              <LinkItem>
                <a href="#investors">Для инвесторов</a>
              </LinkItem>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Наши продукты</SectionTitle>
            <LinkList>
              <LinkItem>
                <a href="#business">ChatGPT для бизнеса</a>
              </LinkItem>
              <LinkItem>
                <a href="#aggregator">Агрегатор нейросетей</a>
              </LinkItem>
              <LinkItem>
                <a href="#telegram">ChatGPT в Telegram</a>
              </LinkItem>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Ссылки</SectionTitle>
            <LinkList>
              <LinkItem>
                <img src={iconTelegram} alt="Иконка телеграм"></img>
                <a href="#сommunity">Сообщество в Телеграм</a>
              </LinkItem>
              <LinkItem>
                <img src={iconRobot} alt="Иконка бота"></img>
                <a href="#bot">Телеграм бот</a>
              </LinkItem>
              <LinkItem>
                <img src={iconEmail} alt="Иконка почты"></img>
                <a href="#email">email@bothub.chat</a>
              </LinkItem>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Блог</SectionTitle>
            <LinkList>
              <LinkItem>
                <img src={iconBlog} alt="Иконка блога"></img>
                <a href="#blog">Наш блог</a>
              </LinkItem>
              <LinkItem>
                <img src={iconHabr} alt="Иконка habr"></img>
                <a href="#habr">Habr</a>
              </LinkItem>
              <LinkItem>
                <img src={iconTelegram} alt="Иконка телеграм"></img>
                <a href="#telegram">Телеграм</a>
              </LinkItem>
            </LinkList>
          </Section>
        </SectionInfo>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
