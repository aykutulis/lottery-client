import Skeleton from '@mui/material/Skeleton';
import React from 'react';

import { getPrimaryColor } from '../constants';

export const LoadingPlaceholder: React.FC = () => (
  <>
    {Array.from(Array(3).keys()).map((item) => (
      <Skeleton key={item} width={512} sx={{ bgcolor: getPrimaryColor(0.06) }} />
    ))}
  </>
);
