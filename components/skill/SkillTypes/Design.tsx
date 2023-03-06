import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Design({
  data,
  levels,
}: {
  data: DocumentData;
  levels: DocumentData;
}) {
  const { sass, cssmodules, styledcomponents, mui, emotion } = data;
  const {
    sass_level,
    cssmodules_level,
    styledcomponents_level,
    mui_level,
    emotion_level,
  } = levels;

  return (
    <S.SkillTypes>
      <SkillTypesTitle>Design Systems</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="Sass"
          filename="sass"
          level={sass_level}
          comments={sass}
        />
        <SkillIcon
          name="CSS MODULES"
          filename="cssmodules"
          level={cssmodules_level}
          comments={cssmodules}
        />
        <SkillIcon
          name="Styled-Components"
          filename="styledcomponents"
          level={styledcomponents_level}
          comments={styledcomponents}
        />
        <SkillIcon
          name="Material UI"
          filename="mui"
          level={mui_level}
          comments={mui}
        />
        <SkillIcon
          name="Emotion.js"
          filename="emotion"
          level={emotion_level}
          comments={emotion}
          isFull
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Design;
