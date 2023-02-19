import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      white: string;
      black: string;
      error: string;
      figures: {
        red: string;
        yellow: string;
        green: string;
        blue: string;
        orange: string;
        gray: string;
      };
    };
  }
}

export interface StyledProps {
  open?: boolean;
  error?: boolean;
  row?: boolean;
  param?: string[];
  select?: boolean;
  animate?: boolean;
  show?: boolean;
  small?: boolean;
}
