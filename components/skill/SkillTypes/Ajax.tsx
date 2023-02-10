import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Ajax({ data }: { data: DocumentData }) {
  const { axios } = data;
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Ajax</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="Axios"
          filename="axios"
          level={2}
          comments={axios}
          height={40}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Ajax;
