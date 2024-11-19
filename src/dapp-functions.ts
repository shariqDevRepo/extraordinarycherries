import {
  simulateContract,
  writeContract,
  waitForTransactionReceipt,
  type WriteContractReturnType,
} from "@wagmi/core";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import { parseEther } from "viem";
import { config } from "./wagmi";
import { smartContractABI } from "./abis.json";
import whitelist from "./whitelist.json";

export const generateMerkleTreeRoot = (walletAddress: string) => {
  const leaves = whitelist.addresses.map((x) => keccak256(x));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const buf2hex = (x: any) => "0x" + x.toString("hex");

  const leaf = keccak256(walletAddress);
  const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

  return proof;
};

export const whitelistMint = (
  walletAddress: `0x${string}`,
  quantity: number,
  total: number
) => {
  return new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      const simulationResult = await simulateContract(config, {
        chainId: config.chains[0].id,
        account: walletAddress,
        abi: smartContractABI,
        address: import.meta.env.VITE_SMART_CONTRACT_ADDRESS,
        functionName: "whitelistMint",
        args: [quantity, generateMerkleTreeRoot(walletAddress)],
        value: parseEther(total.toString()),
      });

      if (simulationResult.request.__mode === "prepared") {
        const writeContractResult: WriteContractReturnType =
          // @ts-ignore
          await writeContract(config, {
            chainId: config.chains[0].id,
            account: walletAddress,
            abi: smartContractABI,
            address: import.meta.env.VITE_SMART_CONTRACT_ADDRESS,
            functionName: "whitelistMint",
            args: [quantity, generateMerkleTreeRoot(walletAddress)],
            value: parseEther(total.toString()),
          });

        // @ts-ignore
        await waitForTransactionReceipt(config, {
          hash: writeContractResult,
        });

        resolve("");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      const errObj = JSON.parse(
        JSON.stringify(err, Object.getOwnPropertyNames(err))
      );

      reject(
        errObj.shortMessage.split("reason:\n")[1] || "Something went wrong"
      );
    }
  });
};

export const mint = (
  walletAddress: `0x${string}`,
  quantity: number,
  total: number
) => {
  return new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      const simulationResult = await simulateContract(config, {
        chainId: config.chains[0].id,
        account: walletAddress,
        abi: smartContractABI,
        address: import.meta.env.VITE_SMART_CONTRACT_ADDRESS,
        functionName: "whitelistMint",
        args: [quantity],
        value: parseEther(total.toString()),
      });

      if (simulationResult.request.__mode === "prepared") {
        const writeContractResult: WriteContractReturnType =
          // @ts-ignore
          await writeContract(config, {
            chainId: config.chains[0].id,
            account: walletAddress,
            abi: smartContractABI,
            address: import.meta.env.VITE_SMART_CONTRACT_ADDRESS,
            functionName: "whitelistMint",
            args: [quantity],
            value: parseEther(total.toString()),
          });

        // @ts-ignore
        await waitForTransactionReceipt(config, {
          hash: writeContractResult,
        });

        resolve("");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      const errObj = JSON.parse(
        JSON.stringify(err, Object.getOwnPropertyNames(err))
      );

      reject(
        errObj.shortMessage.split("reason:\n")[1] || "Something went wrong"
      );
    }
  });
};
