import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';

import { App } from './App';
import { PRIMARY_COLOR, BG_COLOR } from './constants';

const globalStyles = css`
  * {
    color: ${PRIMARY_COLOR};
  }

  body {
    margin: 0;
    background-color: ${BG_COLOR};
    overflow: hidden;
  }

  .MuiTooltip-tooltip {
    font-size: 14px !important;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
