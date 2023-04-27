import { useState } from "react";

import Chat from "@src/components/Chat/Chat";
import ChatButton from "@src/components/Chat/ChatButton";

interface Props {
  children: React.ReactNode;
}

function ChatBotLayout({ children }: Props) {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <>
      {isChatVisible && <Chat onClose={toggleChatVisibility} />}
      <ChatButton onClick={toggleChatVisibility} />
      {children}
    </>
  );
}

export default ChatBotLayout;
