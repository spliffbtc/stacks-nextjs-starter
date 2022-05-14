import React, { ReactElement, useState, useEffect } from "react";
import { getUserData, isSignedIn } from "@/utils/auth";
import { useFetch } from "@/hooks/useFetch";
import { Grid, Text } from "@chakra-ui/react";

function WelcomeHeader(): ReactElement {
  // Get BNS
  const { data, error, loading } = useFetch(
    `https://stacks-node-api.mainnet.stacks.co/v1/addresses/stacks/${
      getUserData().profile.stxAddress.mainnet
    }
        `,
    { current: true },
    {}
  );
  const [welcomeUser, setWelcomeUser] = useState("");
  useEffect(
    () =>
      isSignedIn()
        ? data.names
          ? // Set BNS
            setWelcomeUser(data.names)
          : // Set STX Address
            setWelcomeUser(getUserData().profile.stxAddress.mainnet)
        : // Set Nothing
          setWelcomeUser(""),
    []
  );

  return (
    <>
      {WelcomeHeader}

      <Text variant="body2">
        Welcome,
        <a
          href={`https://explorer.stacks.co/address/${
            getUserData().profile.stxAddress.mainnet
          }?chain=mainnet`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>{welcomeUser}</Text>
        </a>
      </Text>
    </>
  );
}

export default WelcomeHeader;
