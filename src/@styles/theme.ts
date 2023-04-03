import { COLORS } from "@src/@styles/colors";
import { FONT_SIZE } from "@src/@styles/fontSize";

export const LIGHT_MODE_THEME = {
  COLOR: {
    PRIMARY: COLORS.BLUE[60],
    SECONDARY: COLORS.GREY[80],
    TEXT: {
      DEFAULT: COLORS.GREY[95],
      DISABLED: COLORS.GREY[60],
      PLACEHOLDER: COLORS.GREY[80],
      LIGHT_BLUE: COLORS.BLUE[50],
      WHITE: COLORS.WHITE,
    },
    BACKGROUND: {
      DEFAULT: COLORS.GREY[20],
      SECONDARY: COLORS.WHITE,
      TERTIARY: COLORS.GREY[50],
    },
    CONTAINER: {
      PRIMARY: COLORS.GREY[20],
      DEFAULT: COLORS.WHITE,
    },
    BORDER: COLORS.GREY[50],
  },
  FONT_SIZE: {
    TITLE: FONT_SIZE["34px"],
    SUBTITLE: FONT_SIZE["20px"],
    X_LARGE_BODY: FONT_SIZE["18px"],
    LARGE_BODY: FONT_SIZE["14px"],
    BODY: FONT_SIZE["12px"],
    PLACEHOLDER: FONT_SIZE["12px"],
    CAPTION: FONT_SIZE["10px"],
  },
} as const;
