import React, { ReactElement, useState, useEffect } from "react";
import { getUserData, isSignedIn, userSession } from "@/utils/auth";
import { useFetch } from "@/hooks/useFetch";
import styles from "@/styles/Home.module.css";
import { Box, Heading, Grid, Link, Text } from "@chakra-ui/react";
import { getStxAddress } from "@stacks/connect";

function WelcomeHeader(): ReactElement {
  const [stxAddress, setStxAddress] = useState("");
  const [BNS, setBNS] = useState("");
  const [welcomeUser, setWelcomeUser] = useState("");

  // Get BNS
  const { data, error, loading } = useFetch(
    `https://stacks-node-api.mainnet.stacks.co/v1/addresses/stacks/${
      getUserData().profile.stxAddress.mainnet
    }
        `,
    { current: true },
    { 1: "BNS" }
  );

  // Set Welcome User
  useEffect(
    () =>
      isSignedIn()
        ? data.names
          ? // Set BNS
            setWelcomeUser(BNS)
          : // Set STX Address
            setWelcomeUser(stxAddress)
        : // Set Nothing
          setWelcomeUser(""),
    [data.names]
  );

  return isSignedIn() ? (
    <Heading as="h1" className={styles.title}>
      Welcome,
      <Link
        href={`https://explorer.stacks.co/address/${stxAddress}?chain=mainnet`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        {welcomeUser}
      </Link>
    </Heading>
  ) : (
    <></>
  );
}

export default WelcomeHeader;
