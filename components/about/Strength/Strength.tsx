import React from "react";
import * as S from "./Strength.style";

function Strength({ title, children }: { title: string; children: string | JSX.Element }) {
  return (
    <S.Strength>
      <S.Title>#{title}</S.Title>
      {children}
    </S.Strength>
  );
}

export default Strength;
