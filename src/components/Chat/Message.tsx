import styled, { keyframes } from "styled-components";

const MessageWrapper = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-bottom: 12px;
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 16px;
  background-color: ${({ theme, isUser }) =>
    isUser ? theme.COLOR.PRIMARY.DEFAULT : theme.COLOR.CONTAINER.SECONDARY};
  color: ${({ theme, isUser }) =>
    isUser ? theme.COLOR.TEXT.WHITE : theme.COLOR.TEXT.DEFAULT};
  animation: ${slideUp} 0.3s ease-out;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
`;

function Message({ isUser, content }: { isUser: boolean; content: string }) {
  return (
    <MessageWrapper isUser={isUser}>
      <MessageBubble isUser={isUser}>{content}</MessageBubble>
    </MessageWrapper>
  );
}

export default Message;
