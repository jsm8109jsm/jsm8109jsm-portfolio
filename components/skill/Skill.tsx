import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as S from "./Skill.style";
import Image from "next/image";
import SectionTitle from "../etc/SectionTitle";
import * as A from "../../styles/All";
import Languages from "./SkillTypes/Languages";
import Ajax from "./SkillTypes/Ajax";
import Tools from "./SkillTypes/Tools";
import Framework from "./SkillTypes/Framework";
import Design from "./SkillTypes/Design";
import State from "./SkillTypes/State";
import Deployment from "./SkillTypes/Deployment";

function Skill() {
  return (
    <A.Section id="skill">
      <SectionTitle>SKILLS</SectionTitle>
      <S.Skills>
        <S.SkillLine>
          <Languages />
          <Ajax />
        </S.SkillLine>
        <S.SkillLine>
          <Tools />
        </S.SkillLine>
        <S.SkillLine>
          <Framework />
          <Design />
        </S.SkillLine>
        <S.SkillLine>
          <State />
          <Deployment />
        </S.SkillLine>
      </S.Skills>
    </A.Section>
  );
}

export default Skill;
