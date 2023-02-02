import React from "react";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Ajax() {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Ajax</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="axios"
          filename="axios"
          level={2}
          comments={[""]}
          height={40}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Ajax;
