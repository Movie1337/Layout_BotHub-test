// src/App.js
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ChatWindow from "./components/ChatWindow";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #1e1e1e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent />
      <ChatWindow />
    </AppContainer>
  );
};

export default App;
