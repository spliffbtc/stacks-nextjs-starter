import React, { useEffect, useState } from "react";
import { authenticate, isSignedIn, signUserOut } from "@/utils/auth";
import { Button } from "@chakra-ui/react";

export function ConnectWallet() {
  const [buttonText, setButtonText] = useState("Connect Stacks Wallet");
  useEffect(
    () =>
      isSignedIn()
        ? setButtonText("Sign Out")
        : setButtonText("Connect Stacks Wallet"),
    []
  );

  return (
    <Button
      onClick={() => {
        isSignedIn() ? signUserOut() : authenticate();
      }}
    >
      {buttonText}
    </Button>
  );
}
