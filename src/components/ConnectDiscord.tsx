import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";

export function ConnectDiscord() {
  const [buttonText, setButtonText] = useState("Connect Discord");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setButtonText("Disconnect Discord");
    }
  }, [session]);

  return (
    <Button
      onClick={() => {
        session ? signOut() : signIn();
      }}
    >
      {buttonText}
    </Button>
  );
}
