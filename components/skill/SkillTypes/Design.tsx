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
  const { sass, cssmodules, styledcomponents, mui, emotion, tailwind } = data;
  const {
    sass_level,
    cssmodules_level,
    styledcomponents_level,
    mui_level,
    emotion_level,
    tailwind_level,
  } = levels;

  const folderName = "design";

  return (
    <S.SkillTypes>
      <SkillTypesTitle>Design Systems</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="Sass"
          filename="sass"
          level={sass_level}
          comments={sass}
          folderName={folderName}
        />
        <SkillIcon
          name="CSS MODULES"
          filename="cssmodules"
          level={cssmodules_level}
          comments={cssmodules}
          folderName={folderName}
        />
        <SkillIcon
          name="Styled-Components"
          filename="styledcomponents"
          level={styledcomponents_level}
          comments={styledcomponents}
          folderName={folderName}
        />
        <SkillIcon
          name="Material UI"
          filename="mui"
          level={mui_level}
          comments={mui}
          folderName={folderName}
        />
        <SkillIcon
          name="tailwindcss"
          filename="tailwind"
          level={tailwind_level}
          comments={tailwind}
          folderName={folderName}
        />
        <SkillIcon
          name="Emotion.js"
          filename="emotion"
          level={emotion_level}
          comments={emotion}
          isFull
          folderName={folderName}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Design;
