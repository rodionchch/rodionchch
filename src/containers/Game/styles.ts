import styled, { keyframes } from "styled-components";
import { StyledProps } from "styled/styled";
import { GameCell } from "components/GameCell/styles";

const scaleAnimation = keyframes`
 0% { transform: scale(1) }
 60% { transform: scale(1.5) }
 100% { transform: scale(1) }
 `;

export const Game = styled.div`
  display: flex;
  width: 1078px;
  height: 718px;
  position: relative;
`;

export const GameRow = styled.div`
  background: ${(props) => props.theme.colors.white};
  display: flex;

  &:first-child {
    > ${GameCell} {
      border-right: 0;

      &:first-child {
        border-left: 0;
      }
    }
  }

  &:last-child {
    flex-direction: row-reverse;
    > ${GameCell} {
      border-left: 0;

      &:first-child {
        border-right: 0;
      }
    }
  }
`;

export const GameCol = styled.div<StyledProps>`
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;

  &:first-child {
    flex-direction: column-reverse;
    &:before {
      content: "1";
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.figures.red};
      position: absolute;
      bottom: -22px;
      left: 24px;
      text-align: center;
      line-height: 62px;
      animation-name: ${scaleAnimation};
      animation-duration: 0;
      animation-iteration-count: infinite;
      ${(props) => props.animate && `animation-duration: 2s;`}
    }
    &:after {
      content: "2";
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.figures.blue};
      position: absolute;
      top: 20px;
      left: -22px;
      line-height: 44px;
      text-align: left;
      padding-left: 10px;
    }
    > ${GameCell} {
      &:first-child {
        position: relative;
      }

      &:last-child {
        position: relative;
        z-index: 10;
        height: 89px;
      }

      &:not(:first-child) {
        border-bottom: 0;
      }
    }
  }

  &:last-child {
    &:before {
      content: "4";
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.figures.yellow};
      position: absolute;
      bottom: 20px;
      text-align: center;
      right: -22px;
      line-height: 44px;
      text-align: right;
      animation-name: ${scaleAnimation};
      animation-duration: 0;
      animation-iteration-count: infinite;
      padding-right: 10px;
      ${(props) => props.animate && `animation-duration: 2s;`}
    }
    &:after {
      content: "3";
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.figures.green};
      position: absolute;
      top: -24px;
      right: 18px;
      line-height: 26px;
      text-align: center;
    }

    > ${GameCell} {
      &:first-child {
        position: relative;
        z-index: 10;
        height: 89px;
      }
      &:last-child {
        position: relative;
        z-index: 10;
      }
      &:not(:last-child) {
        border-bottom: 0;
      }
    }
  }
`;

export const GameContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 35px;
`;

export const GameBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
