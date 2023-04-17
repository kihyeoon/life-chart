import styled from "styled-components";

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  height: 600px;
  border-radius: 12px;
  box-shadow: 0 0 20px ${({ theme }) => theme.COLOR.SHADOW};
  background-color: ${({ theme }) => theme.COLOR.CONTAINER.SECONDARY};
  z-index: 999;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.BORDER};
`;

export const ChatTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.SUBTITLE};
  color: ${({ theme }) => theme.COLOR.TEXT.DEFAULT};
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.SUBTITLE};
  color: ${({ theme }) => theme.COLOR.TEXT.DEFAULT};
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 128px);
  padding: 1rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLOR.CONTAINER.PRIMARY};
`;

export const ChatForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.COLOR.BORDER};
`;

export const ChatInput = styled.input`
  flex-grow: 0.95;
  word-wrap: break-word;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
  background-color: ${({ theme }) => theme.COLOR.CONTAINER.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT.DEFAULT};
`;
