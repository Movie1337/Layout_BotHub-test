import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
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
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;

  cursor: pointer;

  &:hover > div {
    display: block;
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

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #2a2f4a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  z-index: 1;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #ffffff;

  &:hover {
    background-color: #353b5c;
  }

  svg {
    margin-right: 10px;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;

  svg {
    margin-right: 5px;
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

  &:hover {
    background-color: #0056e0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <Logo>
        Bot<span>hub</span>
      </Logo>
      <NavLinks>
        <NavItem>
          Продукты<select></select>
          <DropdownMenu>
            <DropdownItem>Агрегатор нейросетей BotHub</DropdownItem>
            <DropdownItem>Telegram бот</DropdownItem>
            <DropdownItem>Бизнес бот</DropdownItem>
          </DropdownMenu>
        </NavItem>

        <NavItem>Пакеты</NavItem>

        <NavItem>API</NavItem>
        <NavItem>Блог</NavItem>
      </NavLinks>
      <LanguageSelector>
        <select>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </LanguageSelector>
      <AuthButton>Авторизация</AuthButton>
    </Container>
  </HeaderContainer>
);

export default Header;
