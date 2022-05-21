import { useSession } from "next-auth/react";
import { ConnectDiscord } from "@/components/ConnectDiscord";
import styles from "../styles/Home.module.css";
import { Center, Box, Text, Heading } from "@chakra-ui/react";

export function Discord() {
  const { data: session } = useSession();
  return (
    <Box className={styles.card}>
      <Heading as="h2">Discord</Heading>
      {session?.user?.name ? (
        <Text className={styles.description}>
          {" "}
          Welcome {session?.user?.name}{" "}
        </Text>
      ) : (
        <Text className={styles.description}>Verify Discord</Text>
      )}
      <>
        <ConnectDiscord />
      </>
    </Box>
  );
}
