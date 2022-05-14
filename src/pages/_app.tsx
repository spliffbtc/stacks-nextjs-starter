import Head from "next/head";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import NavBar from "@/layout/NavBar";
import WelcomeHeader from "@/layout/WelcomeHeader";
import Footer from "@/layout/Footer";
import theme from "@/styles/theme";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { isSignedIn } from "@/utils/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Stacks NextJS Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Box>
        <Toaster />
      </Box>
      {isSignedIn() ? <WelcomeHeader /> : <></>}
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
