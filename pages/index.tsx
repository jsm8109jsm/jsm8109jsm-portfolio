import type { NextPage } from "next";
import * as S from "../styles/main/Root";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Skill from "../components/skill/Skill";
import Footer from "../components/footer/Footer";
import Project from "../components/project/Project";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Root>
        <Main />
        <About />
        <Skill />
        <Project />
      </S.Root>
      <Footer />
    </>
  );
};

export default Home;
