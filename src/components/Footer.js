import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  width: 100%;
  color: #c0c0c0;
  padding: 65px 0;
`;

const Container = styled.div`
  width: 1290px;
  display: flex;

  margin: 0 auto;
`;

const Section = styled.div`
  min-width: 200px;
  margin-right: auto;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const LegalInfo = styled.div`
  font-size: 14px;
  color: #999;
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 20px;

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
          <Logo>Bot hub</Logo>
          <LegalInfo>
            ООО «Ботхаб» ОГРН 1236300016259
            <br />
            @BotHub 2023
            <br />
            Пользовательское соглашение
          </LegalInfo>
        </Section>
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
              <a href="https://t.me/example">Сообщество в Telegram</a>
            </LinkItem>
            <LinkItem>
              <a href="https://t.me/bot">Telegram бот</a>
            </LinkItem>
            <LinkItem>
              <a href="mailto:email@bothub.chat">email@bothub.chat</a>
            </LinkItem>
          </LinkList>
        </Section>
        <Section>
          <SectionTitle>Блог</SectionTitle>
          <LinkList>
            <LinkItem>
              <a href="#blog">Наш блог</a>
            </LinkItem>
            <LinkItem>
              <a href="#news">Habr</a>
            </LinkItem>
            <LinkItem>
              <a href="#telegram">Телеграм</a>
            </LinkItem>
          </LinkList>
        </Section>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
