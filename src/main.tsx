import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';

import { App } from './App';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
