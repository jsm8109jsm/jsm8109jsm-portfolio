import Image from "next/image";
import React from "react";
import * as S from "./SkillTypes.style";
import SkillTypesTitle from "./SkillTypesTitle/SkillTypesTitle";

function Languages() {
  return (
    <S.SkillTypes>
      <SkillTypesTitle>Languages</SkillTypesTitle>
      <S.SmallIconsWrapper>
        <S.Icon
          src={"./images/skills/c.svg"}
          alt="c"
          width={120}
          height={120}
        ></S.Icon>
        <S.Icon
          src={"./images/skills/cpp.svg"}
          alt="cpp"
          width={120}
          height={120}
        ></S.Icon>
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <S.Icon
          src={"./images/skills/html.svg"}
          alt="html"
          width={100}
          height={130}
        ></S.Icon>
        <S.Icon
          src={"./images/skills/css.svg"}
          alt="css"
          width={100}
          height={130}
        ></S.Icon>
      </S.SmallIconsWrapper>
      <S.SmallIconsWrapper>
        <S.Icon
          src={"./images/skills/js.svg"}
          alt="js"
          width={100}
          height={100}
        ></S.Icon>
        <S.Icon
          src={"./images/skills/ts.svg"}
          alt="ts"
          width={100}
          height={100}
        ></S.Icon>
      </S.SmallIconsWrapper>
      <S.IconWrapper>
        <S.Icon
          src={"./images/skills/python.svg"}
          alt="python"
          width={100}
          height={100}
        ></S.Icon>
      </S.IconWrapper>
    </S.SkillTypes>
  );
}

export default Languages;
