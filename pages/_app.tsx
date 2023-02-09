import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import "../styles/fonts.css";
import ProjectModal from "../components/project/ProjectModal/ProjectModal";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <GlobalStyle />
            <ProjectModal />
          </QueryClientProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
