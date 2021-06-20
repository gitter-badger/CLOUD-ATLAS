import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/App';
import appConfig from 'src/getConfig';

import './index.css';

console.log(appConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
