import React from "react";
import * as S from "./SkillTypesTitle.style";

function SkillTypesTitle({ children }: { children: string }) {
  return (
    <S.SkillTypesTitle>
      {children}
      <S.Line />
    </S.SkillTypesTitle>
  );
}

export default SkillTypesTitle;
