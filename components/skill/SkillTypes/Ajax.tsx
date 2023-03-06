import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Ajax({ data, levels }: { data: DocumentData; levels: DocumentData }) {
  const { axios } = data;
  const { axios_level } = levels;

  return (
    <S.SkillTypes>
      <SkillTypesTitle>Ajax</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="Axios"
          filename="axios"
          level={axios_level}
          comments={axios}
          height={40}
          isFull
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Ajax;
