import React, { useEffect, useState } from "react";
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
import { fireStore } from "../../utils/Firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { LoadingState } from "../../utils/atom/loading";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface SkillComments {
  [key: string]: DocumentData;
}

function Skill() {
  const skillRef = collection(fireStore, "skill");
  const skillLevelRef = collection(fireStore, "skill_level");
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [skillComments, setSkillComments] = useState<SkillComments>({
    languages: [],
    ajax: [],
    tools: [],
    fw: [],
    designs: [],
    state: [],
    deployment: [],
  });
  const [skillLevel, setSkillLevel] = useState<SkillComments>({
    languages_level: [],
    ajax_level: [],
    tools_level: [],
    fw_level: [],
    designs_level: [],
    state_level: [],
    deployment_level: [],
  });
  const matches = useMediaQuery("(min-width:860px)");
  const isMobile = useMediaQuery("(min-width:510px)");

  const { languages, ajax, tools, fw, designs, state, deployment } =
    skillComments;

  const {
    languages_level,
    ajax_level,
    tools_level,
    fw_level,
    designs_level,
    state_level,
    deployment_level,
  } = skillLevel;

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await getDocs(skillRef);
        const newData = skillComments;
        response.docs.map((doc) => {
          newData[doc.id] = doc.data();
        });
        setSkillComments(newData);
        const response2 = await getDocs(skillLevelRef);
        const newData2 = skillLevel;
        response2.docs.map((doc) => {
          newData2[doc.id] = doc.data();
        });
        setSkillLevel(newData2);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <A.Section id="skill">
      <SectionTitle>SKILLS</SectionTitle>
      {!loading && (
        <S.Skills>
          {matches ? (
            <>
              <S.SkillLine>
                <Languages data={languages} levels={languages_level} />
              </S.SkillLine>
              <S.SkillLine>
                <Tools data={tools} levels={tools_level} />
                <Ajax data={ajax} levels={ajax_level} />
              </S.SkillLine>
              <S.SkillLine>
                <Framework data={fw} levels={fw_level} />
                <Design data={designs} levels={designs_level} />
              </S.SkillLine>
              <S.SkillLine>
                <State data={state} levels={state_level} />
                <Deployment data={deployment} levels={deployment_level} />
              </S.SkillLine>
            </>
          ) : isMobile ? (
            <>
              <S.SkillLine>
                <Languages data={languages} levels={languages_level} />
                <Ajax data={ajax} levels={ajax_level} />
                <Framework data={fw} levels={fw_level} />
                <Deployment data={deployment} levels={deployment_level} />
              </S.SkillLine>
              <S.SkillLine>
                <Tools data={tools} levels={tools_level} />
                <Design data={designs} levels={designs_level} />
                <State data={state} levels={state_level} />
              </S.SkillLine>
            </>
          ) : (
            <>
              <S.SkillLine>
                <Languages data={languages} levels={languages_level} />
                <Ajax data={ajax} levels={ajax_level} />
                <Framework data={fw} levels={fw_level} />
                <Deployment data={deployment} levels={deployment_level} />
                <Tools data={tools} levels={tools_level} />
                <Design data={designs} levels={designs_level} />
                <State data={state} levels={state_level} />
              </S.SkillLine>
            </>
          )}
        </S.Skills>
      )}
    </A.Section>
  );
}

export default Skill;
