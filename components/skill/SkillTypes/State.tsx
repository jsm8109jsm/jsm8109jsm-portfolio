import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function State({
  data,
  levels,
}: {
  data: DocumentData;
  levels: DocumentData;
}) {
  const {redux, recoil, reactquery} = data;
  const {redux_level, recoil_level, reactquery_level} = levels;
  return (
    <S.SkillTypes>
      <SkillTypesTitle>State Management</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="Redux"
          filename="redux"
          level={redux_level}
          comments={redux}
          isFull
        />
        <SkillIcon
          name="Recoil"
          filename="recoil"
          level={recoil_level}
          comments={recoil}
          isFull
        />
        <SkillIcon
          name="React Query"
          filename="reactquery"
          level={reactquery_level}
          comments={reactquery}
          isFull
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default State;
