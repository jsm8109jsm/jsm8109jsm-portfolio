import styled, { DefaultTheme } from "styled-components";
import Slider from "react-slick";

export const Main = styled.section`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
`;

export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Intro = styled.div<{ adj?: true }>`
  color: ${({ adj, theme }) =>
    adj ? theme.color.teal : theme.color.lightBeige};
  font-weight: bold;
  font-size: 64px;
  display: block;
  @media screen and (max-width: 940px) {
    font-size: 48px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    max-width: calc(100vw - 200px);
    overflow: hidden;
  }
  /* .slick-slide:not(.slick-active) {
    visibility: hidden;
  } */
`;
