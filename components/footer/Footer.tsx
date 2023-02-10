import React from "react";
import * as S from "./Footer.style";
import { VscGithub } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <S.Footer>
      <S.Icons>
        <S.Link href="https://github.com/jsm8109jsm" target="_blank">
          <VscGithub size={40} />
        </S.Link>
        <S.Link href="https://www.instagram.com/jsmjsm0203/" target="_blank">
          <FiInstagram size={40} />
        </S.Link>
      </S.Icons>
      <S.Copyright>
        Copyright 2023. Jeong Seung Min. All rights reserved.
      </S.Copyright>
    </S.Footer>
  );
}

export default Footer;
