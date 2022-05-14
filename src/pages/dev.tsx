import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import { Heading, Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1" className={styles.title}>
          Example Page
        </Heading>
      </main>
    </Box>
  );
};

export default Home;
