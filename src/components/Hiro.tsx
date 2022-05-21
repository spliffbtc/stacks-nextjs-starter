import { ConnectWallet } from "@/components/ConnectWallet";
import { isSignedIn } from "@/utils/auth";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Hiro() {
  return (
    <Box className={styles.card}>
      <Heading as="h2">Hiro Wallet</Heading>
      {isSignedIn() ? (
        <Text className={styles.description}> Welcome </Text>
      ) : (
        <Text className={styles.description}>Verify Hiro Wallet</Text>
      )}
      <ConnectWallet />
    </Box>
  );
}
