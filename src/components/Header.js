import React, { useState } from "react";
import styled from "styled-components";
import iconLang from "../icons/icon-lang.png";
import iconBot from "../icons/icon-bot.png";
import iconTg from "../icons/icon-tg.png";
import iconBusiness from "../icons/icon-business.png";
import arrowIcon from "../icons/arrow-down.png";

const HeaderContainer = styled.header`
  color: #ffffff;
  width: 100%;
  margin-bottom: 120px;
  background-color: #1e1e2f;
`;

const Container = styled.div`
  width: 1290px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;

  span {
    background-color: #0066ff;
    border-radius: 3px;
    margin-left: 5px;
    font-weight: bold;
    padding: 0 3px;
    margin-right: 25px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  padding-left: 25px;
  border-left: 1px solid gray;
  margin-right: auto;
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  cursor: pointer;
  user-select: none;
`;

const ArrowIcon = styled.img`
  margin-left: 5px;
  width: 12px;
  height: 12px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

const DropdownMenu = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #2a2f4a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  flex-wrap: wrap;
  padding: 20px;
  width: 700px;
  height: 224px;
`;

const DropdownItems = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 10px 30px;
  cursor: pointer;
  width: 40%;

  &:hover {
    background-color: #353b5c;
    border-radius: 8px;
  }

  img {
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
`;

const DropdownTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;

  margin-top: 15px;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 35px;

  img {
    margin-right: 2px;
  }

  select {
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;

    option {
      color: black;
    }
  }
`;

const AuthButton = styled.button`
  padding: 8px 16px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 130px;
  height: 40px;

  &:hover {
    background-color: #0056e0;
  }
`;

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Logo>
          Bot<span>hub</span>
        </Logo>
        <NavLinks>
          <NavItem onClick={() => setDropdownVisible(!isDropdownVisible)}>
            Продукты
            <ArrowIcon
              src={arrowIcon}
              isOpen={isDropdownVisible}
              alt="Иконка стрелочки"
            />
            <DropdownMenu isVisible={isDropdownVisible}>
              <DropdownItems>
                <img src={iconBot} alt="Иконка бота"></img>
                <a href="#">
                  <DropdownItem>
                    <DropdownTitle>Агрегатор нейросетей BotHub</DropdownTitle>
                    <p>ChatGPT на базе 3.5 и 4.0 версии OpenAI</p>
                  </DropdownItem>
                </a>
              </DropdownItems>
              <DropdownItems>
                <img src={iconTg} alt="Иконка тг"></img>
                <a href="#">
                  <DropdownItem>
                    <DropdownTitle>Telegram бот</DropdownTitle>
                    <p>Удобный бот в Telegram который всегда под рукой</p>
                  </DropdownItem>
                </a>
              </DropdownItems>
              <DropdownItems>
                <img src={iconBusiness} alt="Иконка бизнес"></img>
                <a href="#">
                  <DropdownItem>
                    <DropdownTitle>Бизнес бот</DropdownTitle>
                    <p>ChatGPT для эффективного решения бизнес задач</p>
                  </DropdownItem>
                </a>
              </DropdownItems>
            </DropdownMenu>
          </NavItem>
          <NavItem>Пакеты</NavItem>
          <NavItem>API</NavItem>
          <NavItem>Блог</NavItem>
        </NavLinks>
        <LanguageSelector>
          <img src={iconLang} alt="Иконка языка"></img>
          <select>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </LanguageSelector>
        <AuthButton>Авторизация</AuthButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
