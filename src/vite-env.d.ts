/// <reference types="vite/client" />
import Web3 from 'web3';

interface ImportMetaEnv {
  readonly VITE_CONTRACT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare global {
  interface Window {
    web3?: Web3;
  }
}
