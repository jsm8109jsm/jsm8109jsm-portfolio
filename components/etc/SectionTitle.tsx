import React from "react";
import * as S from "./SectionTitle.style";

function SectionTitle({
  children,
  isBlack,
}: {
  children: string;
  isBlack?: true;
}) {
  return (
    <S.Center>
      <S.Title isBlack={isBlack}>{children}</S.Title>
    </S.Center>
  );
}

export default SectionTitle;
