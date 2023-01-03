import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { Link } from "react-scroll";
import { useScroll } from "../../hooks/useScroll";

function Header() {
  const { isScroll } = useScroll();
  return (
    <S.Header isScroll={isScroll}>
      <Link to="main" spy smooth offset={-70} duration={500}>
        <S.Logo isScroll={isScroll}>JSM</S.Logo>
      </Link>
    </S.Header>
  );
}

export default Header;
