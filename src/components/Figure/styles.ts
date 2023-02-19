import styled from "styled-components";
import { StyledProps } from "styled/styled";

export const Figure = styled.div<StyledProps>`
  position: relative;
  background: ${({ param, theme }) => {
    const color = param?.[1];
    return theme.colors.figures[color as keyof typeof theme.colors.figures];
  }};

  ${({ param }) => {
    if (param?.includes("present")) {
      return `
        &:before {
          content: '+';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          display: table;
          z-index: 100;
          font-size: 30px;
        }
      `;
    }
  }}

  ${({ param, theme }) => {
    const color = param?.[1];

    if (param?.includes("square")) {
      return `
        width: 60px;
        height: 60px;
      `;
    }

    if (param?.includes("rectangle")) {
      return `
        width: 70px;
        height: 40px;
      `;
    }

    if (param?.includes("triangle")) {
      return `
        position: relative;
        &:after {
          content: ''; 
          position: absolute;
          left: -40px; top: -75px;
          border: 40px solid transparent;
          border-bottom: 60px solid ${
            theme.colors.figures[color as keyof typeof theme.colors.figures]
          };
        }
        &:before {
          left: -8px;
          top: 2px;
        }
      `;
    }

    if (param?.includes("trapezoid")) {
      return `
        width: 70px;
        height: 45px;
        margin: auto;
        transform: perspective(120px) rotateX(40deg);
      `;
    }
  }}

  ${({ param }) => {
    if (param?.includes("medium")) {
      if (param?.includes("trapezoid")) {
        return `transform: perspective(120px) rotateX(40deg) scale(0.7);`;
      }
      return `
        transform: scale(0.7);
      `;
    }
    if (param?.includes("small")) {
      if (param?.includes("trapezoid")) {
        return `transform: perspective(120px) rotateX(40deg) scale(0.5);`;
      }
      return `
        transform: scale(0.5);
      `;
    }
  }}
`;
