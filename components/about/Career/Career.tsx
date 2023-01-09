import React from "react";
import * as S from "./Career.style";

function Career({ title }: { title: string }) {
  return (
    <S.Career>
      <S.Title>{title}</S.Title>
      <S.Contents>
        <S.Content isCertificate>정보처리산업기사</S.Content>
      </S.Contents>
    </S.Career>
  );
}

export default Career;
