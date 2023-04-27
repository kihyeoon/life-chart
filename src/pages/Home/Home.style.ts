import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  // 줄 간격
  line-height: 1.5;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > img {
    width: 50px;
    height: 50px;
  }
`;
