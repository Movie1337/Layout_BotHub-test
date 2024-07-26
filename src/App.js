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
