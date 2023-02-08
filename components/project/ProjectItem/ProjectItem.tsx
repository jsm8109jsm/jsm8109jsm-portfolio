import Image from "next/image";
import React from "react";
import { Personal_Projects } from "../Project";
import * as S from "./ProjectItem.style";

function ProjectItem({ data }: { data: Personal_Projects }) {
  return (
    <S.ProjectItem>
      <S.ProjectImage
        src={String(data.url)}
        alt={`${data.name} 사진`}
        fill
      ></S.ProjectImage>
      <div>
        <S.Title>
          <>{data.name}</>
        </S.Title>
        <S.Date>
          <>{`(${data.start_month} ~ ${data.finish_month})`}</>
        </S.Date>
      </div>
      <S.Intro>
        <>{data.intro}</>
      </S.Intro>
    </S.ProjectItem>
  );
}

export default ProjectItem;
