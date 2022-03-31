import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

import { PRIMARY_COLOR } from '../constants';

export const StyledTextField = styled(TextField)`
  label,
  input {
    color: ${PRIMARY_COLOR};
  }
  div::before {
    border-color: ${PRIMARY_COLOR};
  }
  :hover div::before {
    border-color: ${PRIMARY_COLOR};
  }
`;
