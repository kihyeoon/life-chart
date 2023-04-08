import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND.SECONDARY};
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);

  width: fit-content;
  padding: 24px;
`;

export const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
  > p {
    font-size: ${({ theme }) => theme.FONT_SIZE.SUBTITLE};
    color: ${({ theme }) => theme.COLOR.TEXT.DEFAULT};
  }
`;

export const HighlightedText = styled.strong`
  /* font-weight: 600; */
  color: ${({ theme }) => theme.COLOR.PRIMARY.ACTIVE};
`;
