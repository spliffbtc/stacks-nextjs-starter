import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ConnectDiscord } from "@/components/ConnectDiscord";
import styles from "../styles/Home.module.css";
import { Box, Text, Heading } from "@chakra-ui/react";

export function Discord() {
  // Get Session
  const { data: session } = useSession();
  // Welcome Text
  const [welcomeText, setWelcomeText] = useState("Connect Wallet");
  // Set Welcome Text
  useEffect(
    () =>
      session?.user
        ? setWelcomeText(`Welcome ${session?.user?.name}`)
        : setWelcomeText("Connect Wallet"),
    [session?.user]
  );

  // Render Component
  return (
    <Box className={styles.card}>
      <Heading as="h2" className={styles.title}>
        Discord
      </Heading>

      {session?.user?.name ? (
        <Text className={styles.description}>{welcomeText}</Text>
      ) : (
        <Text className={styles.description}>{welcomeText}</Text>
      )}
      <Box className={styles.description}>
        <ConnectDiscord />
      </Box>
    </Box>
  );
}
