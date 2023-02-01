import Image from "next/image";
import React, { useEffect } from "react";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";
import data from "./SkillComments.json";
import { query, collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../utils/Firebase";

function Languages() {
  const { c, cpp, html, css, js, ts, python } = data.skills.languages;

  const skillRef = collection(fireStore, "skill");

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(skillRef);
      console.log(data);
    };

    getUsers();
  }, []);

  return (
    <S.SkillTypes>
      <SkillTypesTitle>Languages</SkillTypesTitle>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="C"
          filename="c"
          level={2}
          width={120}
          height={120}
          comments={c}
        />
        <SkillIcon
          name="C++"
          filename="cpp"
          level={2}
          width={120}
          height={120}
          comments={cpp}
        />
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="HTML5"
          filename="html"
          level={5}
          height={130}
          comments={html}
        />
        <SkillIcon
          name="CSS3"
          filename="css"
          level={4}
          height={130}
          comments={css}
        />
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon name="JavaScript" filename="js" level={4} comments={js} />
        <SkillIcon name="TypeScript" filename="ts" level={4} comments={ts} />
      </S.SmallIconsWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="python"
          filename="python"
          level={2}
          comments={python}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Languages;
