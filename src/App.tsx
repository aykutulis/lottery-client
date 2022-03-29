import React from 'react';

import { useContractData } from './hooks';

export const App: React.FC = () => {
  const { balance, manager, players, loading, error } = useContractData();

  return (
    <div>
      <div>{balance}</div>
      <div>{manager}</div>
      <div>{players}</div>
      <div>{loading}</div>
      <div>{error?.message}</div>
    </div>
  );
};
