import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <GlobalStyle />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
