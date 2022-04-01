import React from 'react';
import { Alert, Typography, FormGroup, FormHelperText, Tooltip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { useContractData, useEnter, usePickWinner } from './hooks';
import { EnterButton, FlexDivider, StyledTextField, Wrapper, StyledPaper, LoadingPlaceholder } from './components';

const NOT_MANAGER_ERROR = 'You are not the manager of this contract';
const NO_PLAYERS_AVAILABLE_ERROR = 'No players are available to be picked';

export const App: React.FC = () => {
  const { balance, manager, signerAddress, players, loading, error } = useContractData();
  const { input, onChange, onEnter, enterLoading, enterError } = useEnter();
  const { onPickWinner, pickWinnerLoading, pickWinnerError } = usePickWinner();

  const isManager = manager === signerAddress;

  const tooltipText = (() => {
    if (!isManager) return NOT_MANAGER_ERROR;
    if (!players?.length) return NO_PLAYERS_AVAILABLE_ERROR;
    return '';
  })();

  return (
    <Wrapper maxWidth='sm'>
      <StyledPaper elevation={3}>
        {error && (
          <Alert variant='filled' severity='error'>
            {error.message}
          </Alert>
        )}
        {pickWinnerError && (
          <Alert variant='filled' severity='error'>
            {pickWinnerError.message}
          </Alert>
        )}
        <Typography variant='h4' component='h1'>
          Lottery Contract
        </Typography>
        <Typography variant='body2' marginTop={1.2}>
          {!loading && (
            <>
              This contract is managed by <strong>{manager}</strong>. There are currently {players?.length} people
              entered, competing to win {balance} ether!
            </>
          )}
          {loading && <LoadingPlaceholder />}
        </Typography>

        <FlexDivider />

        <FormGroup>
          <Typography variant='subtitle2'>Want to try your luck?</Typography>
          <StyledTextField
            variant='filled'
            size='small'
            margin='dense'
            fullWidth
            label='Amount of ether to enter'
            value={input}
            onChange={onChange}
            error={!!enterError}
          />
          {enterError && <FormHelperText error>{enterError.message}</FormHelperText>}
          <EnterButton variant='contained' color='info' onClick={onEnter} loading={enterLoading}>
            {enterLoading ? 'Entering...' : 'Enter'}
          </EnterButton>
        </FormGroup>

        <FlexDivider />

        <Typography variant='body1'>Ready to pick a winner?</Typography>
        <Tooltip title={tooltipText} arrow disableHoverListener={isManager && !!players?.length}>
          <LoadingButton
            variant='contained'
            color='success'
            onClick={onPickWinner}
            loading={pickWinnerLoading}
            disabled={!isManager || !players?.length}
          >
            {pickWinnerLoading ? 'Picking winner...' : 'Pick a winner'}
          </LoadingButton>
        </Tooltip>
      </StyledPaper>
    </Wrapper>
  );
};
