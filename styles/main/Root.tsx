import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 6000px;
  /* min-height: 100vh; */
  width: 100%;
`;

export const Text = styled.h1`
  opacity: ${({ animate }: { animate: number }) => (animate > 0 ? 1 : 0)};
  transition: .3s
`;
