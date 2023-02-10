import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import * as S from "./ProjectModal.style";
function ProjectModal() {
  const [modal, setModal] = useRecoilState(modalState);
  const { data, isOpen } = modal;
  return (
    <S.StyledModal
      open={isOpen}
      onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
    >
      <S.StyledBox>
        <S.Title>
          <>{data.name}</>
        </S.Title>
        <S.Date>
          <>{`(${data.start_month} ~ ${data.finish_month})`}</>
        </S.Date>
      </S.StyledBox>
    </S.StyledModal>
  );
}

export default ProjectModal;
