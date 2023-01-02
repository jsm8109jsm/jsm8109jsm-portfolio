import React from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import * as S from "./Main.style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  const settings = {
    arrows: false,
    dots: false,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnHover: true,
  };
  return (
    <S.Main>
      <S.IntroDiv>
        <Fade cascade damping={0.5} triggerOnce>
          <S.Intro>안녕하세요!👋</S.Intro>
          <S.StyledSlider {...settings}>
            <S.Intro adj>{"/* 개쩌는 */"}</S.Intro>
            <S.Intro adj>{"/* 개쎅씨한 */"}</S.Intro>
            <S.Intro adj>{"/* 수퍼쎅씨 */"}</S.Intro>
          </S.StyledSlider>
          <S.Intro>프론트엔드 개발자</S.Intro>
          <S.Intro>정승민입니다!</S.Intro>
        </Fade>
      </S.IntroDiv>
    </S.Main>
  );
}

export default Main;
