import Head from "next/head";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import NavBar from "@/layout/NavBar";
import Footer from "@/layout/Footer";
import theme from "@/styles/theme";
import { ChakraProvider, Box } from "@chakra-ui/react";


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
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
