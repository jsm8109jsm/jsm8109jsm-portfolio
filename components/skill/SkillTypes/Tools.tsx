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

  const folderName = 'tools';
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
          folderName={folderName}
        />
        <SkillIcon
          name="GitHub"
          filename="github"
          level={github_level}
          width={120}
          height={120}
          comments={github}
          isFull
          folderName={folderName}
        />
        <SkillIcon
          name="Visual Studio Code"
          filename="vsc"
          level={vsc_level}
          comments={vsc}
          folderName={folderName}
        />
        <SkillIcon
          name="GitKraken"
          filename="gitkraken"
          level={gitkraken_level}
          comments={gitkraken}
          folderName={folderName}
        />
        <SkillIcon
          name="Figma"
          filename="figma"
          level={figma_level}
          comments={figma}
          folderName={folderName}
        />
        <SkillIcon
          name="Notion"
          filename="notion"
          level={notion_level}
          comments={notion}
          folderName={folderName}
        />
        <SkillIcon
          name="slack"
          filename="slack"
          level={slack_level}
          width={150}
          folderName={folderName}
          comments={slack}
          isFull
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Tools;
