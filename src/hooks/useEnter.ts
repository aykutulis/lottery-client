import { useState } from 'react';
import { ethers } from 'ethers';

import { signerContract } from '../clients';

export const useEnter = () => {
  const [input, setInput] = useState('');
  const [enterLoading, setEnterLoading] = useState(false);
  const [enterError, setEnterError] = useState<Error | undefined>(undefined);

  const onEnter = async () => {
    try {
      setEnterLoading(true);
      setEnterError(undefined);
      await signerContract.functions.enter({
        value: ethers.utils.parseEther(input),
        gasLimit: 2000000,
      });
    } catch (error) {
      setEnterError(error as Error);
    } finally {
      setEnterLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEnterError(undefined);
    setInput(e.target.value);
  };

  return { input, onChange, onEnter, enterLoading, enterError };
};
