import { web3 } from './web3';
import abi from '../assets/lottery.json';
import { AbiItem } from 'web3-utils';

const contractAddress = process.env.VITE_CONTRACT_ADDRESS;

export const lottery = web3 ? new web3.eth.Contract(abi as AbiItem[], contractAddress) : undefined;
