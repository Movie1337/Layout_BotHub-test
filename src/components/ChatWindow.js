import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Configuration, OpenAIApi } from "openai-edge";

const ChatContainer = styled.div`
  width: 741px;
  height: 592px;
  background-color: #1e1e2f;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin-bottom: 85px;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Message = styled.div`
  background-color: ${(props) => (props.isUser ? "#007bff" : "#3e3e3e")};
  color: white;
  padding: 10px;
  border-radius: 15px;
  margin: 5px 0;
  max-width: 70%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  animation: ${slideIn} 0.3s ease-out;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 25px 20px;
  border: none;
  border-radius: 5px;
  background-color: rgba(18, 24, 37, 1);
  color: white;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056e0;
  }
`;

const configuration = new Configuration({
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M",
  basePath: "https://bothub.chat/api/v2/openai/v1",
});
const openai = new OpenAIApi(configuration);

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Привет! Чем могу помочь?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const userMessage = { role: "user", content: newMessage };
      setMessages([...messages, userMessage]);
      setNewMessage("");

      try {
        const response = await openai.createChatCompletion({
          messages: [...messages, userMessage],
          model: "gemini-pro",
        });
        const reply = (await response.json()).choices[0].message.content;
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: reply },
        ]);
      } catch (error) {
        console.error("Ошибка при получении ответа от API:", error);
      }
    }
  };

  useEffect(() => {
    const messagesContainer = document.querySelector("#messagesContainer");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <ChatContainer>
      <MessagesContainer id="messagesContainer">
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.role === "user"}>
            {msg.content}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Спроси о чем нибудь..."
        />
        <SendButton onClick={handleSendMessage}>Отправить</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatWindow;
