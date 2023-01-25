import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as S from "./Skill.style";
import Image from "next/image";
import SectionTitle from "../etc/SectionTitle";
import * as A from "../../styles/All";
import Languages from "./SkillTypes/Languages";

function Skill() {
  return (
    <A.Section id="skill">
      <SectionTitle>SKILLS</SectionTitle>
      <S.Skills>
        <S.SkillLine>
          <Languages />
        </S.SkillLine>
        <S.SkillLine>
          <Languages />
        </S.SkillLine>
        <S.SkillLine>
          <Languages />
        </S.SkillLine>
        <S.SkillLine>
          <Languages />
        </S.SkillLine>
      </S.Skills>
    </A.Section>
  );
}

export default Skill;
