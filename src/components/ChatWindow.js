import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Configuration, OpenAIApi } from "openai-edge";
import botAvatar from "../images/bot-avatar.png";
import userAvatar from "../icons/user-avatar.png";
import sendIcon from "../icons/icon-send.png";
import geminiAvatar from "../images/gemini.png";

const ChatContainer = styled.div`
  width: 741px;
  height: 592px;
  background-color: rgba(18, 24, 37, 1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 834px) {
    margin-bottom: 75px;
  }

  @media (max-width: 375px) {
    width: 343px;
    margin-bottom: 64px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #1e1e2f;
  margin-bottom: 10px;
  padding: 0 20px;
`;

const BotInfo = styled.div`
  display: flex;
  align-items: center;
`;

const BotAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 12px;
`;

const BotDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const BotName = styled.h2`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-bottom: -15px;
`;

const BotSubtitle = styled.p`
  color: rgba(97, 109, 141, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;

const ContextCheckbox = styled.label`
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;

  input {
    margin-right: 5px;
  }
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
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
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  &.user {
    flex-direction: row-reverse;
    text-align: right;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px;
`;

const MessageContent = styled.div`
  max-width: 70%;
  background-color: ${(props) =>
    props.isUser ? "#007bff" : "rgba(49, 62, 98, 1)"};
  color: white;
  padding: 10px;
  border-radius: 15px;
  animation: ${slideIn} 0.3s ease-out;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const BotNameMessage = styled.div`
  color: rgba(255, 255, 255, 1);

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;

  margin-bottom: 8px;
  margin-left: 60px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px 24px 24px;
`;

const Input = styled.input`
  flex: 1;
  height: 26px;
  padding: 14px 20px;
  border: 1px solid #1e1e2f;
  border-radius: 5px;
  background-color: rgba(18, 24, 37, 1);
  color: white;
  outline: none;
`;

const SendIcon = styled.img`
  position: absolute;
  right: 40px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const configuration = new Configuration({
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M", // Replace with your actual API key
  basePath: "https://bothub.chat/api/v2/openai/v1",
});
const openai = new OpenAIApi(configuration);

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Привет! Чем могу помочь?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [context, setContext] = useState(true);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const userMessage = { role: "user", content: newMessage };
      setMessages([...messages, userMessage]);
      setNewMessage("");

      try {
        const response = await openai.createChatCompletion({
          messages: [...messages, userMessage],
          model: "gemini-pro",
          options: { keep_context: context },
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const messagesContainer = document.querySelector("#messagesContainer");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <ChatContainer>
      <Header>
        <BotInfo>
          <BotAvatar src={botAvatar} alt="Аватарка бота" />
          <BotDescription>
            <BotName>BotHub: ChatGPT & Midjourney</BotName>
            <BotSubtitle>Bot</BotSubtitle>
          </BotDescription>
        </BotInfo>
        <ContextCheckbox>
          Сохранить контекст
          <input
            type="checkbox"
            checked={context}
            onChange={() => setContext(!context)}
          />
        </ContextCheckbox>
      </Header>
      <MessagesContainer id="messagesContainer">
        {messages.map((msg, index) => (
          <React.Fragment key={index}>
            {msg.role === "assistant" && (
              <BotNameMessage>Gemini</BotNameMessage>
            )}
            <Message className={msg.role === "user" ? "user" : ""}>
              <Avatar
                src={msg.role === "user" ? userAvatar : geminiAvatar}
                alt="Avatar"
              />
              <MessageContent isUser={msg.role === "user"}>
                {msg.content}
              </MessageContent>
            </Message>
          </React.Fragment>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Спроси о чем нибудь..."
          onKeyDown={handleKeyDown}
        />
        <SendIcon src={sendIcon} alt="Send" onClick={handleSendMessage} />
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatWindow;
