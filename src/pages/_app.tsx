import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../styles/theme";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import WelcomeHeader from "../layout/WelcomeHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stacks-NextJS-Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <ChakraProvider resetCSS theme={theme}>
          <NavBar />
          <WelcomeHeader />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
