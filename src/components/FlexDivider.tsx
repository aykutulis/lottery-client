import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';

import { getPrimaryColor } from '../constants';

const StyledDivider = styled(Divider)`
  border-color: ${getPrimaryColor(0.3)};
`;

export const FlexDivider: React.FC = () => <StyledDivider flexItem />;
