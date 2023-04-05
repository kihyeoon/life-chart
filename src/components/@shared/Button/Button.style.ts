import styled, { CSSProp, DefaultTheme, css } from "styled-components";

import { Props, Size, StyleType } from "./Button";

const styleTable: Record<StyleType, CSSProp<DefaultTheme>> = {
  primary: css`
    border: none;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);

    ${({ theme }) => css`
      color: ${theme.COLOR.TEXT.WHITE};
      background-color: ${theme.COLOR.PRIMARY.DEFAULT};

      &: hover {
        background-color: ${theme.COLOR.PRIMARY.HOVER};
      }

      &: active {
        background-color: ${theme.COLOR.PRIMARY.ACTIVE};
      }
    `};
  `,

  secondary: css`
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);

    ${({ theme }) => css`
      color: ${theme.COLOR.TEXT.DEFAULT};
      border: 1px solid ${theme.COLOR.BORDER};
      background-color: ${theme.COLOR.CONTAINER.SECONDARY};

      &: hover {
        color: ${theme.COLOR.PRIMARY.HOVER};
        border: 1px solid ${theme.COLOR.PRIMARY.HOVER};
      }

      &: active {
        color: ${theme.COLOR.PRIMARY.ACTIVE};
        border: 1px solid ${theme.COLOR.PRIMARY.ACTIVE};
      }
    `}
  `,

  tertiary: css`
    border: none;

    ${({ theme }) => css`
      color: ${theme.COLOR.TEXT.DEFAULT};
      background-color: transparent;

      &: hover {
        background-color: ${theme.COLOR.CONTAINER.TERTIARY};
      }

      &: active {
        background-color: ${theme.COLOR.CONTAINER.TERTIARY_ACTIVE};
      }
    `}
  `,
};

const sizeTable: Record<Size, CSSProp<DefaultTheme>> = {
  small: css`
    padding: 0.25rem 0.5rem;

    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.BODY};
    `}
  `,
  medium: css`
    padding: 0.5rem 1rem;

    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.BODY};
    `}
  `,
  large: css`
    padding: 0.65rem 1rem;
    font-weight: 600;

    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LARGE_BODY};
    `}
  `,
};

export const Container = styled.button`
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.COLOR.OUTLINE};
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }

  ${({ size, styleType }: Pick<Props, "size" | "styleType">) => css`
    ${styleTable[styleType]};
    ${sizeTable[size]};
  `}
`;
