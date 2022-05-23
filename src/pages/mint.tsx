import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MintButton } from "@/components/MintButton";
import { Box, Heading, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        <Box className={styles.grid}>
          <Box>
            <Heading as="h2" className={styles.title}>Mint a FreePunk</Heading>
            <Text className={styles.description}>Verify Hiro Wallet</Text>
            <Box className={styles.description}>
              <MintButton />
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default Home;
