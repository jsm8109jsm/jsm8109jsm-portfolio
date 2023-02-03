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

export interface SkillComments {
  [key: string]: DocumentData;
}

function Skill() {
  const skillRef = collection(fireStore, "skill");
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
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await getDocs(skillRef);
        const newData = skillComments;
        response.docs.map((doc) => {
          newData[doc.id] = doc.data();
        });
        console.log(newData.ajax);
        setSkillComments(newData);
      } catch (error) {
        console.log(error);
      }
    })();
    setLoading(false);
  }, []);

  return (
    <A.Section id="skill">
      <SectionTitle>SKILLS</SectionTitle>
      {!loading && (
        <S.Skills>
          <S.SkillLine>
            <Languages data={skillComments?.languages} />
            {/* <Ajax data={skillComments?.ajax} /> */}
          </S.SkillLine>
          {/* <S.SkillLine>
            <Tools data={skillComments?.tools} />
          </S.SkillLine>
          <S.SkillLine>
            <Framework data={skillComments?.fw} />
            <Design data={skillComments?.design} />
          </S.SkillLine>
          <S.SkillLine>
            <State data={skillComments.state} />
            <Deployment data={skillComments.deployment} />
          </S.SkillLine> */}
        </S.Skills>
      )}
    </A.Section>
  );
}

export default Skill;
