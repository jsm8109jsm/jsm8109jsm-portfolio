import { DocumentData } from "firebase/firestore";
import React from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Tools({ data, levels }: { data: DocumentData; levels: DocumentData }) {
  const { git, github, vsc, gitkraken, figma, notion, slack } = data;
  const {
    git_level,
    github_level,
    vsc_level,
    gitkraken_level,
    figma_level,
    notion_level,
    slack_level,
  } = levels;
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Tools</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="git"
          filename="git"
          level={git_level}
          width={150}
          height={80}
          comments={git}
          isFull
        />
        <SkillIcon
          name="GitHub"
          filename="github"
          level={github_level}
          width={120}
          height={120}
          comments={github}
          isFull
        />
        <SkillIcon
          name="Visual Studio Code"
          filename="vsc"
          level={vsc_level}
          comments={vsc}
        />
        <SkillIcon
          name="GitKraken"
          filename="gitkraken"
          level={gitkraken_level}
          comments={gitkraken}
        />
        <SkillIcon
          name="Figma"
          filename="figma"
          level={figma_level}
          comments={figma}
        />
        <SkillIcon
          name="Notion"
          filename="notion"
          level={notion_level}
          comments={notion}
        />
        <SkillIcon
          name="slack"
          filename="slack"
          level={slack_level}
          width={150}
          // height={80}
          comments={slack}
          isFull
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Tools;
