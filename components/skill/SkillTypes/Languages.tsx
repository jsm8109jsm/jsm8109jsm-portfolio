import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect } from "react";
import { SkillComments } from "../Skill";
import SkillIcon from "./SkillIcon/SkillIcon";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";
function Languages({
  data,
  levels,
}: {
  data: DocumentData;
  levels: DocumentData;
}) {
  const { c, cpp, html, css, js, ts, python } = data;
  const {
    c_level,
    cpp_level,
    html_level,
    css_level,
    js_level,
    ts_level,
    python_level,
  } = levels;
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Languages</SkillTypesTitle>
      {/* <S.SmallIconsWrapper>
        <SkillIcon
          name="C"
          filename="c"
          level={c_level}
          width={120}
          height={120}
          comments={c}
        />
        <SkillIcon
          name="C++"
          filename="cpp"
          level={cpp_level}
          width={120}
          height={120}
          comments={cpp}
        />
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="HTML5"
          filename="html"
          level={html_level}
          height={130}
          comments={html}
        />
        <SkillIcon
          name="CSS3"
          filename="css"
          level={css_level}
          height={130}
          comments={css}
        />
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <SkillIcon
          name="JavaScript"
          filename="js"
          level={js_level}
          comments={js}
        />
        <SkillIcon
          name="TypeScript"
          filename="ts"
          level={ts_level}
          comments={ts}
        />
      </S.SmallIconsWrapper>
      <S.IconWrapper>
        <SkillIcon
          name="python"
          filename="python"
          level={python_level}
          comments={python}
        />
      </S.IconWrapper> */}
      <S.IconWrapper>
        <SkillIcon
          name="C"
          filename="c"
          level={c_level}
          width={120}
          height={120}
          comments={c}
        />
        <SkillIcon
          name="C++"
          filename="cpp"
          level={cpp_level}
          width={120}
          height={120}
          comments={cpp}
        />
        <SkillIcon
          name="HTML5"
          filename="html"
          level={html_level}
          height={130}
          comments={html}
        />
        <SkillIcon
          name="CSS3"
          filename="css"
          level={css_level}
          height={130}
          comments={css}
        />
        <SkillIcon
          name="JavaScript"
          filename="js"
          level={js_level}
          comments={js}
        />
        <SkillIcon
          name="TypeScript"
          filename="ts"
          level={ts_level}
          comments={ts}
        />
        <SkillIcon
          name="python"
          filename="python"
          level={python_level}
          comments={python}
          isFull
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Languages;
