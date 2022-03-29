import { ethers } from 'ethers';
import abi from '../assets/lottery.json';

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS as string;

export const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : undefined;

export const lottery = new ethers.Contract(contractAddress, abi, provider);
