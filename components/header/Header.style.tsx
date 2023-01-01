import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: ${({ theme }) => theme.color.beige};
  padding: 0 100px;
  display: fl;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-family: "Lemon", cursive;
  color: ${({ theme }) => theme.color.teal};
  margin: 0;
  cursor: pointer;
`;
