import styled from "styled-components";

export const Header = styled.header<{ isScroll: boolean }>`
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: ${({ isScroll, theme }) =>
    isScroll ? theme.color.teal : theme.color.beige};
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: 0.4s;
`;

export const Logo = styled.h1<{ isScroll: boolean }>`
  font-family: "Lemon", cursive;
  color: ${({ isScroll, theme }) =>
    isScroll ? theme.color.beige : theme.color.teal};
  margin: 0;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    animation: ${({ theme }) => theme.animation.tada} 1s linear;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

export const LinkMenu = styled.li<{ isScroll: boolean }>`
  font-family: "Black Han Sans", sans-serif;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.4s;
  color: ${({ isScroll, theme }) =>
    isScroll ? theme.color.beige : theme.color.teal};
  &:hover {
    animation: ${({ theme }) => theme.animation.tada} 1s linear;
  }
`;
  