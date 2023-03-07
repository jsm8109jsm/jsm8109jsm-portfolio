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

  const folderName = "languages";
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Languages</SkillTypesTitle>
      <S.IconWrapper>
        <SkillIcon
          name="C"
          filename="c"
          level={c_level}
          width={110}
          height={110}
          comments={c}
          folderName={folderName}
        />
        <SkillIcon
          name="C++"
          filename="cpp"
          level={cpp_level}
          width={110}
          height={110}
          comments={cpp}
          folderName={folderName}
        />
        <SkillIcon
          name="HTML5"
          filename="html"
          level={html_level}
          height={130}
          comments={html}
          folderName={folderName}
        />
        <SkillIcon
          name="CSS3"
          filename="css"
          level={css_level}
          height={130}
          comments={css}
          folderName={folderName}
        />
        <SkillIcon
          name="JavaScript"
          filename="js"
          level={js_level}
          comments={js}
          folderName={folderName}
        />
        <SkillIcon
          name="TypeScript"
          filename="ts"
          level={ts_level}
          comments={ts}
          folderName={folderName}
        />
        <SkillIcon
          name="python"
          filename="python"
          level={python_level}
          comments={python}
          isFull
          folderName={folderName}
        />
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Languages;
