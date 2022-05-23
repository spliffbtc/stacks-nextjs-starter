import React, { useEffect, useState } from "react";
import { StacksMainnet } from "@stacks/network";
import { openContractCall } from "@stacks/connect";
import { uintCV } from "@stacks/transactions";
import { authenticate, isSignedIn } from "@/utils/auth";
import { mintContract } from "@config";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export function MintButton() {
  // Prepare Toast
  const toast = useToast();
  // Network
  const network = new StacksMainnet();
  // Mint
  const contractAddress = mintContract.address;
  const contractName = mintContract.name;
  const functionName = "mint";

  // `functionArgs` is a list of `ClarityValue` objects
  const functionArgs = [uintCV(0)];

  // Button Text
  const [buttonText, setButtonText] = useState("Connect Stacks Wallet");
  useEffect(
    () =>
      isSignedIn()
        ? setButtonText("Mint Now")
        : setButtonText("Connect Stacks Wallet"),
    []
  );

  // Create: Options
  const options = {
    contractAddress: contractAddress,
    contractName: contractName,
    functionName: functionName,
    functionArgs,
    network,
    appDetails: {
      name: "Stacks Next.js Starter",
      icon: "/public/logo.png",
    },
    onFinish: (data: { txId: unknown }): void => {
      console.log(data);
      toast({
        title: "Transaction Submitted",
        description: `Your transaction has been submitted to the network. ${(
          <a href="https://stacks.io/explorer/tx/${data.txId}">
            View on Stacks Explorer
          </a>
        )}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
  };

  return (
    <Button
      onClick={() => {
        console.log("Something isn't working!");
        // isSignedIn() ? openContractCall(options) : authenticate();
      }}
    >
      {buttonText}
    </Button>
  );
}
