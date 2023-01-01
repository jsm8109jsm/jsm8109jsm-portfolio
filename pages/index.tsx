import type { NextPage } from "next";
import * as S from "../styles/main/Root";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Root>
        <Main />
        <S.Img>
          {/* <Image src="/images/logo.png" alt="asdf" width={100} height={100} /> */}
          <GitHubIcon />
        </S.Img>
      </S.Root>
    </>
  );
};

export default Home;
