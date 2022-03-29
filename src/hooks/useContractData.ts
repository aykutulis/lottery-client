import { ethers } from 'ethers';

import { useEffect, useState } from 'react';
import { lottery, provider } from '../clients';

export const useContractData = () => {
  const [players, setPlayers] = useState<string[] | undefined>(undefined);
  const [manager, setManager] = useState<string | undefined>(undefined);
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
        const manager = await lottery.manager();
        const players = await lottery.getPlayers();
        const balance = await provider.getBalance(lottery.address);
        const balanceInEth = ethers.utils.formatEther(balance);

        setManager(manager);
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

  return { manager, players, balance, loading, error };
};
