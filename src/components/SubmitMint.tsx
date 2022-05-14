import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { StacksMainnet } from "@stacks/network";
import { openContractCall } from "@stacks/connect";
import { uintCV } from "@stacks/transactions";
import { authenticate, isSignedIn } from "@/utils/auth";
import { mintContract } from "@config";
import { Button } from "@chakra-ui/react";

export function SubmitMint() {
  // Network
  const network = new StacksMainnet();
  // Mint
  const contractAddress = mintContract.address;
  const contractName = mintContract.name;
  const functionName = "mint";

  // `functionArgs` is a list of `ClarityValue` objects
  const functionArgs = [uintCV(0)];

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
    onFinish: (data: any) => {
      console.log(data);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Transaction Submitted!
                </p>
                <a
                  className="mt-1 text-sm text-gray-500"
                  href={`https://explorer.stacks.co/txid/${data.txId}?chain=mainnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to view on Stacks Explorer:
                </a>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    },
  };

  const [buttonText, setButtonText] = useState("Connect Stacks Wallet");
  useEffect(
    () =>
      isSignedIn() ? setButtonText("Sign Out") : setButtonText("Mint Now"),
    []
  );

  return (
    <Button
      onClick={() => {
        isSignedIn() ? openContractCall(options) : authenticate();
      }}
    >
      {buttonText}
    </Button>
  );
}
