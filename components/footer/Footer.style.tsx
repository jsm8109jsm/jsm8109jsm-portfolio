import styled from "styled-components";

export const Footer = styled.footer`
  padding: 60px;
  height: 180px;
  background-color: ${({ theme }) => theme.color.teal};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Copyright = styled.span``;

export const Link = styled.a`
  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
`;
