import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Framework({
  data,
  levels,
}: {
  data: DocumentData;
  levels: DocumentData;
}) {
  const { react, next } = data;
  const { react_level, next_level } = levels;
  const folderName = "framework";
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Front-end F/w, Library</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="React.js"
          filename="react"
          level={react_level}
          comments={react}
          isFull
          folderName={folderName}
        />
        <SkillIcon
          name="Next.js"
          filename="next"
          level={next_level}
          comments={next}
          isFull
          folderName={folderName}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Framework;
