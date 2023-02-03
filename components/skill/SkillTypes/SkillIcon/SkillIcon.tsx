import { DocumentData } from "firebase/firestore";
import React from "react";
import { useRecoilState } from "recoil";
import { LoadingState } from "../../../../utils/atom/loading";
import SkillTypesTitle from "../SkillTypesTitle/SkillTypesTitle";
import * as S from "./SkillIcon.style";

interface SkillIconProps {
  name: string;
  width: number;
  height: number;
  filename: string;
  level: number;
  comments: any;
}

function SkillIcon({
  name,
  width,
  height,
  filename,
  level,
  comments,
}: SkillIconProps) {
  const [loading, setLoading] = useRecoilState(LoadingState);
  return (
    <>
      <S.IconTooltip
        title={
          <>
            <SkillTypesTitle>{name}</SkillTypesTitle>
            <S.SkillComments>
              {!loading &&
                comments.length > 0 &&
                comments.map((item: string, index: number) => {
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
