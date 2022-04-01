import { ethers } from 'ethers';

import { useEffect, useState } from 'react';
import { lottery, provider, signerContract } from '../clients';

export const useContractData = () => {
  const [players, setPlayers] = useState<string[] | undefined>(undefined);
  const [manager, setManager] = useState<string | undefined>(undefined);
  const [signerAddress, setSignerAddress] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const fetchContractData = async () => {
      try {
        if (!window.ethereum || !provider) {
          throw new Error('No ethereum provider found');
        }
        setLoading(true);
        setError(undefined);
        const [manager, signerAddress, players, balance] = await Promise.all([
          lottery.manager(),
          signerContract.signer.getAddress(),
          lottery.getPlayers(),
          provider.getBalance(lottery.address),
        ]);
        const balanceInEth = ethers.utils.formatEther(balance);

        setManager(manager);
        setSignerAddress(signerAddress);
        setPlayers(players);
        setBalance(balanceInEth);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchContractData();
  }, []);

  return { manager, signerAddress, players, balance, loading, error };
};
