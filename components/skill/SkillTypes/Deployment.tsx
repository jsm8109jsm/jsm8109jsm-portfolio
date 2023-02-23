import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Deployment({
  data,
  levels,
}: {
  data: DocumentData;
  levels: DocumentData;
}) {
  const { s3, route53 } = data;
  const { s3_level, route53_level } = levels;
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Deployment</SkillTypesTitle>
      <S.SmallIconsWrapper>
        <SkillIcon name="S3" filename="s3" level={s3_level} comments={s3} />
        <SkillIcon
          name="Route 53"
          filename="route53"
          level={route53_level}
          comments={route53}
        />
      </S.SmallIconsWrapper>
    </S.SkillTypes>
  );
}

export default Deployment;
