import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import * as S from "./Main.style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../utils/Firebase";

function Main() {
  const [data, setData] = useState<string[]>([]);
  const startIndex = Math.floor(Math.random() * data.length - 1);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    initialSlide: startIndex,
  };
  const bucket = collection(fireStore, "modifier");

  useEffect(() => {
    (async () => {
      try {
        const response = await getDocs(bucket);
        const newData: string[] = [];
        response.docs.map((doc) => {
          newData.push(doc.data().modifier);
        });
        setData(newData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <S.Main id="main">
      <S.IntroDiv>
        <Fade cascade damping={0.5} triggerOnce>
          {data.length > 0 && <S.Intro>안녕하세요!👋</S.Intro>}
          {data.length > 0 && (
            <S.StyledSlider {...settings}>
              {data.map((item) => {
                return (
                  <S.Intro adj key={item}>
                    {`/** ${item} */`}
                  </S.Intro>
                );
              })}
            </S.StyledSlider>
          )}
          <S.Intro>프론트엔드 개발자</S.Intro>
          <S.Intro>정승민입니다!</S.Intro>
        </Fade>
      </S.IntroDiv>
    </S.Main>
  );
}

export default Main;
