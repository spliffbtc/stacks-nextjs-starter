import { useState, useEffect } from "react";
import { ConnectWallet } from "@/components/ConnectWallet";
import { isSignedIn } from "@/utils/auth";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Hiro() {
  // Welcome Text
  const [welcomeText, setWelcomeText] = useState("Connect Wallet");
  // Set Welcome Text
  useEffect(
    () =>
      isSignedIn()
        ? setWelcomeText("Welcome")
        : setWelcomeText("Connect Wallet"),
    []
  );

  // Render Component
  return (
    <Box className={styles.card}>
      <Heading as="h2" className={styles.title}>
        Hiro Wallet
      </Heading>
      {isSignedIn() ? (
        <Text className={styles.description}> {welcomeText} </Text>
      ) : (
        <Text className={styles.description}>{welcomeText}</Text>
      )}
      <Box className={styles.description}>
        <ConnectWallet />
      </Box>
    </Box>
  );
}
