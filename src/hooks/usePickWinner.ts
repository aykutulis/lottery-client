import { useState } from 'react';

import { signerContract } from '../clients';

export const usePickWinner = () => {
  const [pickWinnerLoading, setPickWinnerLoading] = useState(false);
  const [pickWinnerError, setPickWinnerError] = useState<Error | undefined>(undefined);

  const onPickWinner = async () => {
    try {
      setPickWinnerLoading(true);
      setPickWinnerError(undefined);
      await signerContract.functions.pickWinner();
    } catch (error) {
      setPickWinnerError(error as Error);
    } finally {
      setPickWinnerLoading(false);
    }
  };

  return { onPickWinner, pickWinnerLoading, pickWinnerError };
};
