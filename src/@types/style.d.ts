import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLOR: {
      PRIMARY: {
        DEFAULT: string;
        HOVER: string;
        ACTIVE: string;
      };
      SECONDARY: string;
      TEXT: {
        DEFAULT: string;
        DISABLED: string;
        PLACEHOLDER: string;
        LIGHT_BLUE: string;
        WHITE: string;
      };
      BACKGROUND: {
        DEFAULT: string;
        SECONDARY: string;
        TERTIARY: string;
      };
      CONTAINER: {
        PRIMARY: string;
        SECONDARY: string;
        TERTIARY: string;
        TERTIARY_ACTIVE: string;
      };
      BORDER: string;
      OUTLINE: string;
    };
    FONT_SIZE: {
      TITLE: string;
      SUBTITLE: string;
      X_LARGE_BODY: string;
      LARGE_BODY: string;
      BODY: string;
      PLACEHOLDER: string;
      CAPTION: string;
    };
  }
}
