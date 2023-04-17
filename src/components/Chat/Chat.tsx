/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import Button from "@src/components/@shared/Button/Button";
import Message from "@src/components/Chat/Message";
import useChatBot from "@src/components/Chat/useChatBot";

import {
  ChatBody,
  ChatContainer,
  ChatFooter,
  ChatHeader,
  ChatInput,
  ChatTitle,
  CloseButton,
} from "./Chat.style";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
}

function Chat({ onClose }: Props) {
  const [inputValue, setInputValue] = useState("");

  const { chatMessages, handleSendMessage } = useChatBot();

  const chatBodyRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    handleSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatTitle>채팅</ChatTitle>
        <CloseButton onClick={() => onClose(false)}>&times;</CloseButton>
      </ChatHeader>
      <ChatBody ref={chatBodyRef}>
        {chatMessages.map((message, index) => (
          <Message
            key={index}
            isUser={message.role === "user"}
            content={message.content}
          />
        ))}
      </ChatBody>
      <ChatFooter>
        <ChatInput
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요"
          max={200}
        />
        <Button onClick={handleSubmit}>전송</Button>
      </ChatFooter>
    </ChatContainer>
  );
}

export default Chat;
