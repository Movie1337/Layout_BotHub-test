import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ChatWindow from "./components/ChatWindow";
import Features from "./components/Features";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #222b44;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  width: 1290px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Container>
        <MainContainer>
          <MainContent />
          <ChatWindow />
        </MainContainer>
        <Features />
      </Container>
      <Footer />
    </AppContainer>
  );
};

export default App;
