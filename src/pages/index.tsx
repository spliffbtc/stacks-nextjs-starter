import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Hiro } from "@/components/Hiro";
import { Discord } from "@/components/Discord";
import { Box, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        <Text className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </Text>
        <Box className={styles.grid}>
          <Hiro />
          <Discord />
        </Box>
      </main>
    </Box>
  );
};

export default Home;
