import React from "react";
import SkillTypesTitle from "../SkillTypesTitle/SkillTypesTitle";
import * as S from "./SkillIcon.style";

interface SkillIconProps {
  name: string;
  width: number;
  height: number;
  filename: string;
  level: number;
}

function SkillIcon({ name, width, height, filename, level }: SkillIconProps) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <S.IconTooltip
        title={
          <>
            <SkillTypesTitle>{name}</SkillTypesTitle>
            <S.LevelTitle>LEVEL</S.LevelTitle>
            <S.SkillLevels>
              {[...Array.from({ length: level }, (v, i) => i)].map(
                (index: number) => {
                  console.log(index);
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
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
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
