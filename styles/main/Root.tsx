import styled from "styled-components";

export const Root = styled.div`
  /* background-color: ${({ theme }) => theme.color.background}; */
  /* height: 6000px; */
  /* min-height: 100vh; */
  width: 100%;
  padding-top: 70px;
  section {
    padding: 60px 100px;
    &:nth-child(2n-1) {
      background-color: ${({ theme }) => theme.color.black};
    }
    &:nth-child(2n) {
      background-color: ${({ theme }) => theme.color.lightBeige};
    }
    @media screen and (max-width: 768px) {
      padding: 60px 50px;
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
