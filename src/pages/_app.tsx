import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ChakraProvider resetCSS theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
