import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 6000px;
  /* min-height: 100vh; */
  width: 100%;
  padding-top: 70px;
  div {
    padding: 0 100px;
    &:nth-child(n) {
      background-color: #181d31;
    }
    &:nth-child(2n) {
      background-color: #e6ddc4;
    }
  }
`;

export const Img = styled.div`
  text-align: center;
  svg {
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      animation: ${({ theme }) => theme.animation.tada} 1s linear;
    }
  }
`;
