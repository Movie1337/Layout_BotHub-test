import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ChatWindow from "./components/ChatWindow";
import Features from "./components/Features";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #121117;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 1290px;

  @media (max-width: 834px) {
    width: 754px;
  }

  @media (max-width: 375px) {
    width: 343px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 834px) {
    flex-direction: column;
  }
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
