import React from "react";
import { Fade } from "react-awesome-reveal";
import * as S from "./Main.style";

function Main() {
  return (
    <S.Main>
      <S.IntroDiv>
        <Fade cascade damping={0.5} triggerOnce>
          <S.Intro>안녕하세요!👋</S.Intro>
          <S.Intro adj>{"/* 개쩌는 */"}</S.Intro>
          <S.Intro>프론트엔드 개발자</S.Intro>
          <S.Intro>정승민입니다!</S.Intro>
        </Fade>
      </S.IntroDiv>
    </S.Main>
  );
}

export default Main;
