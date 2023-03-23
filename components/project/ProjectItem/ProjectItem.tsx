import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import { Personal_Projects } from "../Project";
import { Skeleton } from "@mui/material";
import * as S from "./ProjectItem.style";

function ProjectItem({ data }: { data: Personal_Projects }) {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <S.ProjectItem
      onClick={() =>
        setModal((prev) => {
          return {
            ...prev,
            isOpen: true,
            data: data,
          };
        })
      }
    >
      {data.url ? (
        <S.ProjectImage
          src={String(data.url)}
          alt={`${data.name} 사진`}
          width={360}
          height={234.12}
        />
      ) : (
        <Skeleton>
          <S.ProjectImage
            src={String(data.url)}
            alt={`${data.name} 사진`}
            width={360}
            height={234.12}
          />
        </Skeleton>
      )}
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
