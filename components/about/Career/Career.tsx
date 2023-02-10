import React from "react";
import * as S from "./Career.style";

function Career({
  title,
  data,
  isCertificate,
}: {
  title: string;
  data: string[];
  isCertificate?: true;
}) {
  return (
    <S.Career>
      <S.Title>{title}</S.Title>
      <S.Contents>
        {data.map((item, index) => {
          return <S.Content isCertificate={isCertificate} key={index}>{item}</S.Content>;
        })}
      </S.Contents>
    </S.Career>
  );
}

export default Career;
