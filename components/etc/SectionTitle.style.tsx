import styled from "styled-components";

export const Center = styled.div`
  text-align: center;
`;

export const Title = styled.h1<{ isBlack: boolean }>`
  margin: 0;
  font-family: "Black Han Sans", sans-serif;
  font-size: 48px;
  color: ${({ isBlack }) => (isBlack ? "black" : "white")};
  border-bottom: 1px solid ${({ isBlack }) => (isBlack ? "black" : "white")};
  display: inline-block;
`;
