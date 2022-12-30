import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 6000px;
  /* min-height: 100vh; */
  width: 100%;
`;

export const Img = styled.div`
  text-align: center;
  img {
    border-radius: 20px;
  }
`;
