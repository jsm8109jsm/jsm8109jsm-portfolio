import type { NextPage } from "next";
import * as S from "../styles/main/Root";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import About from "../components/about/About";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Root>
        <Main />
        <About />
      </S.Root>
    </>
  );
};

export default Home;
