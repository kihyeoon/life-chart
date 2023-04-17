/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import Button from "@src/components/@shared/Button/Button";
import Message from "@src/components/Chat/Message";
import useChatBot from "@src/components/Chat/useChatBot";

import * as Styled from "./Chat.style";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
}

function Chat({ onClose }: Props) {
  const { chatMessages, handleSendMessage } = useChatBot();

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputValue = String(formData.get("message"));
    handleSendMessage(inputValue);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <Styled.ChatContainer>
      <Styled.ChatHeader>
        <Styled.ChatTitle>채팅</Styled.ChatTitle>
        <Styled.CloseButton onClick={() => onClose(false)}>
          &times;
        </Styled.CloseButton>
      </Styled.ChatHeader>
      <Styled.ChatBody ref={chatBodyRef}>
        {chatMessages.map((message, index) => (
          <Message
            key={index}
            isUser={message.role === "user"}
            content={message.content}
          />
        ))}
      </Styled.ChatBody>
      <Styled.ChatForm onSubmit={handleSubmit}>
        <Styled.ChatInput
          ref={inputRef}
          placeholder="메시지를 입력하세요"
          max={200}
          id="message"
          name="message"
          required
        />
        <Button type="submit">전송</Button>
      </Styled.ChatForm>
    </Styled.ChatContainer>
  );
}

export default Chat;
