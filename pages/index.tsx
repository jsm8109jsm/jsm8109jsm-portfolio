import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import * as S from "../styles/main/Root";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../components/header/Header";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Root>
        <Fade direction={"left"} delay={50} cascade damping={0.5}>
          <span>asdfasdfasdfasdfasdf</span>
          <span>asdfasdfasdfasdfasdf</span>
          <span>asdfasdfasdfasdfasdf</span>
        </Fade>
        <S.Img>
          {/* <Image src="/images/logo.png" alt="asdf" width={100} height={100} /> */}
          <GitHubIcon />
        </S.Img>
      </S.Root>
    </>
  );
};

export default Home;
