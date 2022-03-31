import React, { useState } from 'react';
import { Paper, Container, Divider, Typography, FormGroup, TextField, Button, Skeleton } from '@mui/material';
import styled from '@emotion/styled';

import { useContractData } from './hooks';
import { lottery, signerContract } from './clients';
import { ethers } from 'ethers';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #20323990;
`;
const CustomTextField = styled(TextField)`
  label,
  input {
    color: #eeedde;
  }
  div::before {
    border-color: #eeedde;
  }
  :hover div::before {
    border-color: #eeedde;
  }
`;

const FlexDivider: React.FC = () => <Divider flexItem />;

export const App: React.FC = () => {
  const { balance, manager, players, loading, error } = useContractData();
  const [input, setInput] = useState('');
  const [enterLoading, setEnterLoading] = useState(false);

  const onEnter = async () => {
    setEnterLoading(true);
    await signerContract.functions.enter({
      value: ethers.utils.parseEther(input),
    });
    setEnterLoading(false);
  };

  return (
    <Wrapper maxWidth='sm'>
      <StyledPaper elevation={3}>
        <Typography variant='h4' component='h1'>
          Lottery Contract
        </Typography>
        <Typography variant='body2' marginTop={1.2}>
          {!loading && (
            <>
              This contract is managed by <strong>{manager}</strong>. There are currently {players?.length} people
              entered, competing to win {players?.length} ether!
            </>
          )}
          {loading && (
            <>
              <Skeleton width={512} />
              <Skeleton width={512} />
              <Skeleton width={512} />
            </>
          )}
        </Typography>

        <FlexDivider />

        <FormGroup>
          <Typography variant='subtitle2'>Want to try your luck?</Typography>
          <CustomTextField
            variant='filled'
            size='small'
            margin='dense'
            fullWidth
            label='Amount of ether to enter'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant='contained' color='info' onClick={onEnter}>
            Enter
          </Button>
        </FormGroup>

        <FlexDivider />

        <Typography variant='body1'>Ready to pick a winner?</Typography>
        <Button variant='contained' color='success'>
          Pick a winner!
        </Button>
      </StyledPaper>
    </Wrapper>
  );
};
