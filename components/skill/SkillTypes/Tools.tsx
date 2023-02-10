import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Tools({ data }: { data: DocumentData }) {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Tools</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="git"
          filename="git"
          level={2}
          width={150}
          height={80}
          comments={[""]}
        />
      </S.IconWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="GitHub"
          filename="github"
          level={2}
          width={120}
          height={120}
          comments={[""]}
        />
      </S.IconWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="Visual Studio Code"
          filename="vsc"
          level={2}
          comments={[""]}
        />
        <SkillIcon
          name="GitKraken"
          filename="gitkraken"
          level={2}
          comments={[""]}
        />
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="Figma"
          filename="figma"
          level={2}
          comments={[""]}
        />
        <SkillIcon
          name="Notion"
          filename="notion"
          level={2}
          comments={[""]}
        />
      </S.SmallIconsWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="slack"
          filename="slack"
          level={2}
          width={150}
          height={80}
          comments={[""]}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Tools;
