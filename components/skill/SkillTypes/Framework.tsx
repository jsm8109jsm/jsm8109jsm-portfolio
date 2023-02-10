import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Framework({ data }: { data: DocumentData }) {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Front-end F/w, Library</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="React.js"
          filename="react"
          level={2}
          comments={[""]}
        />
      </S.IconWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="Next.js"
          filename="next"
          level={2}
          comments={[""]}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Framework;
