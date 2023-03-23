import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { Link } from "react-scroll";
import { useScroll } from "../../hooks/useScroll";
import useMediaQuery from "@mui/material/useMediaQuery";
import { List, Menu } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

function Header() {
  const { isScroll } = useScroll();
  const isMobile = useMediaQuery("(min-width:650px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsView(false);
      setIsOpen(false);
    }
  }, [isMobile]);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsView(true);
      setIsOpen(true);
    } else {
      setIsView(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };
  return (
    <>
      <S.Header isScroll={isScroll}>
        {isMobile ? (
          <>
            <Link to="main" spy smooth offset={-70} duration={500}>
              <S.Logo isScroll={isScroll}>JSM</S.Logo>
            </Link>
            <S.LinkList>
              <Link to="about" spy smooth offset={-70} duration={500}>
                <S.LinkItem isScroll={isScroll}>ABOUT ME</S.LinkItem>
              </Link>
              <Link to="skill" spy smooth offset={-70} duration={500}>
                <S.LinkItem isScroll={isScroll}>SKILLS</S.LinkItem>
              </Link>
              <Link to="project" spy smooth offset={-70} duration={500}>
                <S.LinkItem isScroll={isScroll}>PROJECTS</S.LinkItem>
              </Link>
            </S.LinkList>
          </>
        ) : (
          <>
            <Link to="main" spy smooth offset={-70} duration={500}>
              <S.Logo isScroll={isScroll}>JSM</S.Logo>
            </Link>
            <S.LinkMenu isScroll={isScroll} onClick={() => toggleMenu()} />
          </>
        )}
      </S.Header>
      {isOpen ? (
        <S.StyledList isOpen={isView}>
          {/* <Divider light /> */}
          <S.StyledListItem isScroll={isScroll}>
            <Link to="about" spy smooth offset={-70} duration={500}>
              <S.MobileLinkItem isScroll={isScroll}>ABOUT ME</S.MobileLinkItem>
            </Link>
          </S.StyledListItem>
          {/* <Divider light /> */}
          <S.StyledListItem isScroll={isScroll}>
            <Link to="skill" spy smooth offset={-70} duration={500}>
              <S.MobileLinkItem isScroll={isScroll}>SKILLS</S.MobileLinkItem>
            </Link>
          </S.StyledListItem>
          {/* <Divider light /> */}
          <S.StyledListItem isScroll={isScroll}>
            <Link to="project" spy smooth offset={-70} duration={500}>
              <S.MobileLinkItem isScroll={isScroll}>PROJECTS</S.MobileLinkItem>
            </Link>
          </S.StyledListItem>
        </S.StyledList>
      ) : null}
    </>
  );
}

export default Header;
