import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';

import { App } from './App';

const globalStyles = css`
  * {
    color: #eeedde;
  }

  body {
    margin: 0;
    background-color: #141e27;
    overflow: hidden;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
