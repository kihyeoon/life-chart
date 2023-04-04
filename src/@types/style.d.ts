import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLOR: {
      PRIMARY: string;
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
        DEFAULT: string;
      };
      BORDER: string;
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
