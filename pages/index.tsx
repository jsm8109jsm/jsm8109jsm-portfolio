import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import * as S from "../styles/main/Root";
const Home: NextPage = () => {
  return (
    <S.Root>
      <Fade
        direction={"left"}
        delay={50}
        cascade
        damping={0.5}
      >
        <h1>asdfasdfasdfasdfasdf</h1>
        <h1>asdfasdfasdfasdfasdf</h1>
        <h1>asdfasdfasdfasdfasdf</h1>
      </Fade>
      <AttentionSeeker effect="tada" onVisibilityChange={(true, )}>
        <S.Img>
          <Image src="/images/logo.png" alt="asdf" width={100} height={100} />
        </S.Img>
      </AttentionSeeker>
    </S.Root>
  );
};

export default Home;
