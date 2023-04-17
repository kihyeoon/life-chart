import styled from "styled-components";

const ChatButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLOR.PRIMARY.DEFAULT};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLOR.PRIMARY.HOVER};
  }
`;

interface ChatButtonProps {
  onClick: () => void;
}

function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <ChatButtonWrapper onClick={onClick}>
      <span>💬</span>
    </ChatButtonWrapper>
  );
}

export default ChatButton;
