import type { NextPage } from "next";
import { ConnectWallet } from "../components/ConnectWallet";
import styles from "@/styles/Home.module.css";
import { Heading, Box, Spacer, Text, Link } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1" className={styles.title}>
          Welcome to{" "}
          <Link href="https://www.hiro.so/stacks-js">Stacks.js!</Link>
        </Heading>
        <Text className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </Text>
        <ConnectWallet />
        <Box className={styles.main}>
          <Heading as="h2">Stacks.js</Heading>
          <Box className={styles.grid}>
            <Link href="https://www.hiro.so/stacks-js" className={styles.card}>
              <Heading as="h2">Stacks.js &rarr;</Heading>
              <Text>
                The essential JavaScript libraries for apps on Stacks.
              </Text>
            </Link>
            <Link
              href="https://stacks.js.org/index.html"
              className={styles.card}
            >
              <Heading as="h2">Reference &rarr;</Heading>
              <Text>Reference for Stacks.js libraries</Text>
            </Link>
            <Link
              href="https://github.com/hirosystems/stacks.js"
              className={styles.card}
            >
              <Heading as="h2">GitHub &rarr;</Heading>
              <Text>GitHub repository for Stacks.js.</Text>
            </Link>
            <Link href="https://discord.gg/wrRwq3TACf" className={styles.card}>
              <Heading as="h2">Discord &rarr;</Heading>
              <Text>Developer Channel on Stacks discords</Text>
            </Link>
          </Box>
          <br />
          <Heading as="h2">Next.js</Heading>
          <Box className={styles.grid}>
            <Link href="https://nextjs.org/docs" className={styles.card}>
              <Heading as="h2">Documentation &rarr;</Heading>
              <Text>
                Find in-depth information about Next.js features and API.
              </Text>
            </Link>
            <Link href="https://nextjs.org/learn" className={styles.card}>
              <Heading as="h2">Learn &rarr;</Heading>
              <Text>
                Learn about Next.js in an interactive course with quizzes!
              </Text>
            </Link>
            <Link
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <Heading as="h2">Examples &rarr;</Heading>
              <Text>
                Discover and deploy boilerplate example Next.js projects.
              </Text>
            </Link>
            <Link
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <Heading as="h2">Deploy &rarr;</Heading>
              <Text>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Text>
            </Link>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default Home;
