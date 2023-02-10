import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function State({ data }: { data: DocumentData }) {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>State Management</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="Redux"
          filename="redux"
          level={2}
          comments={[""]}
        />
      </S.IconWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="Recoil"
          filename="recoil"
          level={2}
          height={150}
          comments={[""]}
        />
      </S.IconWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="React Query"
          filename="reactquery"
          level={2}
          comments={[""]}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default State;
