import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import { Personal_Projects } from "../Project";
import * as S from "./ProjectModal.style";
function ProjectModal() {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <S.StyledModal
      open={modal.isOpen}
      onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
    >
      <S.StyledBox>asdf</S.StyledBox>
    </S.StyledModal>
  );
}

export default ProjectModal;
