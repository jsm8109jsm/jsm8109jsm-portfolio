import styled from "styled-components";
import { Menu } from "@mui/icons-material";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";

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
  @media screen and (max-width: 650px) {
    padding: 0;
    justify-content: center;
  }
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

export const LinkMenu = styled(Menu)<{ isScroll: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ isScroll, theme }) =>
    isScroll ? theme.color.beige : theme.color.teal};
  right: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LinkItem = styled.li<{ isScroll: boolean }>`
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

export const MobileLinkItem = styled(LinkItem)`
  font-size: 0.8em;
`;

export const StyledList = styled(List)<{ isOpen: boolean }>`
  position: fixed;
  top: 70px;
  z-index: 30;
  padding: 0;
  right: 0;

  animation: ${({ isOpen }) => (isOpen ? "fadeIn" : "fadeOut")} 0.5s ease;

  @keyframes fadeIn {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }
`;

export const StyledListItem = styled(ListItem)<{ isScroll: boolean }>`
  background-color: ${({ isScroll, theme }) =>
    !isScroll ? theme.color.beige : theme.color.teal};
  display: flex;
  align-items: center;
  justify-content: center;
`;
