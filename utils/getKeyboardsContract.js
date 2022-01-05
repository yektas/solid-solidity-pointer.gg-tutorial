import { ethers } from "ethers";

import abi from "../artifacts/contracts/Keyboards.sol/Keyboards.json";

const contractAddress = "0x4e47c300C4086F9F0CAC909112fB0916274C001A";
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
