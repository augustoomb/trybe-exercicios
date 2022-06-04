import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux';

import ContextProvider from './context/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ContextProvider>
      <App />
    </ContextProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
