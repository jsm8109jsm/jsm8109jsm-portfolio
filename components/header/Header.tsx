import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { Link } from "react-scroll";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const isScroll = scrollPosition >= 1;
  return (
    <S.Header isScroll={isScroll}>
      <Link to="main" spy smooth offset={-70}>
        <S.Logo isScroll={isScroll}>JSM</S.Logo>
      </Link>
    </S.Header>
  );
}

export default Header;
