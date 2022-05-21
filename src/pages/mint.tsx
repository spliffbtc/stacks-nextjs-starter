import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { ConnectWallet } from "@/components/ConnectWallet";
import { ConnectDiscord } from "@/components/ConnectDiscord";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/spliffbtc/stacks-nextjs-starter">
            Stacks-NextJS-Starter!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.title}>Hiro Wallet</h2>
            <p className={styles.description}>Verify Hiro Wallet</p>
            <div className={styles.description}>
              <ConnectWallet />
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.title}>Discord</h2>
            <p className={styles.description}>Verify Discord</p>
            <div className={styles.description}>
              <ConnectDiscord />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
