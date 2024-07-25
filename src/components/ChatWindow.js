// src/components/ChatWindow.js
import React, { useState } from "react";
import styled from "styled-components";
import { Configuration, OpenAIApi } from "openai-edge";

const ChatContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #282c34;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MessagesContainer = styled.div`
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

const Message = styled.div`
  background-color: ${(props) => (props.isUser ? "#007bff" : "#444")};
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  max-width: 70%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

  return (
    <ChatContainer>
      <MessagesContainer>
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
          placeholder="Введите сообщение..."
        />
        <SendButton onClick={handleSendMessage}>Отправить</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatWindow;
