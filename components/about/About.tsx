import Image from "next/image";
import React from "react";
import SectionTitle from "../etc/SectionTitle";
import * as S from "./About.style";
import { Badge, Phone, SchoolOutlined, Email } from "@mui/icons-material";
import Strength from "./Strength/Strength";
import Lorem from "../etc/Lorem";
import Career from "./Career/Career";
import * as A from "../../styles/All";

import data from "./Career/career.json";

function About() {
  return (
    <A.Section id="about">
      <SectionTitle isBlack>ABOUT ME</SectionTitle>
      <S.Info>
        <Image
          src={"/images/logo.png"}
          width={150}
          height={200}
          alt="정승민 여권사진"
        />
        <S.InfoItems>
          <S.InfoItem>
            <Badge />
            <span>정승민</span>
          </S.InfoItem>
          <S.InfoItem>
            <Phone />
            <span>010-3052-7075</span>
          </S.InfoItem>
          <S.InfoItem>
            <SchoolOutlined />
            <span>부산소프트웨어마이스터고등학교 재학 중</span>
          </S.InfoItem>
          <S.InfoItem>
            <Email />
            <span>jsm8109jsm@gmail.com</span>
          </S.InfoItem>
        </S.InfoItems>
      </S.Info>
      <S.Strengths>
        <Strength title={"장점1"}>
          <Lorem />
        </Strength>
        <Strength title={"장점1"}>
          <Lorem />
        </Strength>
        <Strength title={"장점1"}>
          <Lorem />
        </Strength>
        <Strength title={"장점1"}>
          <Lorem />
        </Strength>
      </S.Strengths>
      <S.Careers>
        <Career
          title={"CERTIFICATES"}
          data={data.certificates}
          isCertificate
        ></Career>
        <Career title={"PRIZES"} data={data.prizes}></Career>
      </S.Careers>
    </A.Section>
  );
}

export default About;
