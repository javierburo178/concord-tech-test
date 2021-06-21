import styled from "styled-components";
import { breakpoints } from "../Styles/Theme";

export const AppLayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const CounterItemCount = styled.span`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: red;
`;

export const Button = styled.button`
  background: red;
  color: white;
  width: 10%;
  font-size: 14px;
  font-weight: 600;
  margin: 4px;
  padding: 8px 4px;
  border: 2px solid red;
  border-radius: 1px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 50%;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
