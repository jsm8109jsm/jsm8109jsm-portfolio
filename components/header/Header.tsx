import React from "react";
import * as S from "./Header.style";
import { Link } from "react-scroll";

function Header() {
  return (
    <S.Header>
      <Link to="main" spy smooth offset={-70}>
        <S.Logo>JSM</S.Logo>
      </Link>
    </S.Header>
  );
}

export default Header;
