// src/components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #20232a;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>BotHub</Logo>
    <NavLinks>
      <a href="#">Продукты</a>
      <a href="#">Пакеты</a>
      <a href="#">API</a>
      <a href="#">Блог</a>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
