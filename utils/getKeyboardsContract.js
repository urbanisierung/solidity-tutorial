import { ethers } from "ethers";

import abi from "./Keyboards.json";

const contractAddress = "0x7353934470011916202fE50a8201e18784779A2C";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
