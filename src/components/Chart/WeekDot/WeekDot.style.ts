import styled, { CSSProp, DefaultTheme, css } from "styled-components";

import { StyleType, WeekDotProps } from "./WeekDot";

const styleTable: Record<StyleType, CSSProp<DefaultTheme>> = {
  past: css`
    background-color: ${({ theme }) => theme.COLOR.TEXT.LIGHT_BLUE};
  `,

  current: css`
    ${({ theme }) => css`
      background-color: ${theme.COLOR.TEXT.LIGHT_BLUE};
      animation: shine 1.5s infinite;
      @keyframes shine {
        0% {
          opacity: 1;
          box-shadow: 0 0 5px ${theme.COLOR.TEXT.LIGHT_BLUE};
        }
        50% {
          transform: scale(1.5);
          box-shadow: 0 0 10px 5px ${theme.COLOR.TEXT.LIGHT_BLUE},
            0 0 20px ${theme.COLOR.TEXT.LIGHT_BLUE},
            0 0 30px ${theme.COLOR.TEXT.LIGHT_BLUE};
        }
        100% {
          opacity: 1;
          box-shadow: 0 0 5px ${theme.COLOR.TEXT.LIGHT_BLUE};
        }
      }
    `}
  `,

  future: css`
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND.TERTIARY};
  `,
};

export const Container = styled.li`
  width: 0.625rem;
  height: 0.625rem;
  list-style: none;
  border-radius: 100px;

  ${({ styleType }: WeekDotProps) => css`
    ${styleTable[styleType]}
  `}
`;
