import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Design({ data }: { data: DocumentData }) {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Design Systems</SkillTypesTitle>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="Sass"
          filename="sass"
          level={2}
          comments={[""]}
        />
        <SkillIcon
          name="CSS MODULES"
          filename="cssmodules"
          level={2}
          comments={[""]}
        />
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="Styled-Components"
          filename="styledcomponents"
          level={2}
          comments={[""]}
        />
        <SkillIcon
          name="Material UI"
          filename="mui"
          level={2}
          comments={[""]}
        />
      </S.SmallIconsWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="Emotion.js"
          filename="emotion"
          level={2}
          comments={[""]}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Design;
