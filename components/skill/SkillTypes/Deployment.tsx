import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Deployment({ data }: { data: DocumentData }) {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Deployment</SkillTypesTitle>
      <S.SmallIconsWrapper>
        <SkillIcon name="S3" filename="s3" level={2} comments={[""]} />
        <SkillIcon
          name="Route 53"
          filename="route53"
          level={2}
          comments={[""]}
        />
      </S.SmallIconsWrapper>
    </S.SkillTypes>
  );
}

export default Deployment;
