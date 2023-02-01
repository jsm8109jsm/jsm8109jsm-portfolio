import React from "react";
import SkillTypesTitle from "../SkillTypesTitle/SkillTypesTitle";
import * as S from "./SkillIcon.style";

interface SkillIconProps {
  name: string;
  width: number;
  height: number;
  filename: string;
  level: number;
  comments: string[];
}

function SkillIcon({
  name,
  width,
  height,
  filename,
  level,
  comments,
}: SkillIconProps) {
  return (
    <>
      <S.IconTooltip
        title={
          <>
            <SkillTypesTitle>{name}</SkillTypesTitle>
            <S.SkillComments>
              {comments.map((item, index) => {
                return <S.SkillComment key={index}>{item}</S.SkillComment>;
              })}
            </S.SkillComments>
            <S.LevelTitle>LEVEL</S.LevelTitle>
            <S.SkillLevels>
              {[...Array.from({ length: level }, (v, i) => i)].map(
                (index: number) => {
                  return (
                    <S.SkillLevel key={index} index={index}></S.SkillLevel>
                  );
                }
              )}
            </S.SkillLevels>
          </>
        }
        arrow
        placement="right"
      >
        <S.Icon
          alt={name}
          src={`./images/skills/${filename}.svg`}
          width={width}
          height={height}
        />
      </S.IconTooltip>
    </>
  );
}

SkillIcon.defaultProps = {
  height: 100,
  width: 100,
};

export default SkillIcon;
