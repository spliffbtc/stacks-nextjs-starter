import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Hiro } from "@/components/Hiro";
import { Discord } from "@/components/Discord";
import { Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/spliffbtc/stacks-nextjs-starter">
            Stacks-NextJS-Starter!
          </a>
        </h1>
        <Text className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </Text>
        <div className={styles.grid}>
          <Hiro />
          <Discord />
        </div>
      </main>
    </div>
  );
};

export default Home;
