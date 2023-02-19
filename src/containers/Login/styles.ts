import styled from "styled-components";
import logo from "assets/images/logo.svg";
import { Card } from "components/Card/styles";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Card} {
    margin-bottom: 8%;
  }
`;

export const Logo = styled.div`
  background: url(${logo}) center no-repeat;
  background-size: contain;
  width: 406px;
  height: 46px;
  margin-bottom: 8%;
`;
