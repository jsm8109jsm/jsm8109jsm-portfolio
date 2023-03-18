import React from "react";
import * as S from "./About.style";

export function Character1() {
  return (
    <>
      저는 성격이 <S.Stress>유쾌</S.Stress>한 편입니다. 항상{" "}
      <S.Stress>긍정적</S.Stress>이고 <S.Stress>낙천적</S.Stress>인 사고를
      가지고 살아가고 있습니다. 팀 프로젝트를 하거나 해커톤 대회를 할 때{" "}
      <S.Stress>팀 분위기</S.Stress>를 띄우려고 노력합니다. 사무적인 분위기보다{" "}
      <S.Stress>즐겁고 활기찬</S.Stress> 분위기에서 코딩하는 것을 더 좋아합니다!
    </>
  );
}

export function Character2() {
  return (
    <>
      저는 <S.Stress>학구열</S.Stress>이 넘칩니다. 프론트엔드{" "}
      <S.Stress>신기술</S.Stress>에 대해 관심이 많고, 배우고자 합니다.
      프로젝트를 진행할 때마다, 신기술을 적용시키려고 노력합니다. 모르는 부분이
      있을때는 <S.Stress>공식 문서</S.Stress>를 찾아보거나{" "}
      <S.Stress>구글링</S.Stress>을 하며 학습합니다.
    </>
  );
}
