import type { NextPage } from "next";
import { SubmitMint } from "@/components/SubmitMint";
import styles from "@/styles/Home.module.css";
import { Heading, Box, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1" className={styles.title}>
          Mint
        </Heading>
        <Box className={styles.content}>
          <Text className={styles.description}>
            For this example, we use the FreePunks contracte to demonstrate the
            minting functionality!
          </Text>{" "}
          <SubmitMint />
        </Box>
      </main>
    </Box>
  );
};

export default Home;
