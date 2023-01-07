import React from "react";
import SectionTitle from "../etc/SectionTitle";
import * as S from "./About.style";

function About() {
  return (
    <section id="about">
      <SectionTitle isBlack>ABOUT ME</SectionTitle>
      <S.Info></S.Info>
    </section>
  );
}

export default About;
