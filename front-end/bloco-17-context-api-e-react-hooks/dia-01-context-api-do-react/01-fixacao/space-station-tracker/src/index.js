import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ISSContextProvider from './context/ISSContextProvider';

// import ISSContext from './context/ISSContext';
// import ISSContextAlternativo from './context/ISSContextAlternativo';

// const INITIAL_STATE = {
//   name: 'Context API ... troquei',
// };

// const INITIAL_STATE_ALTERNATIVO = {
//   name: 'Context API ... alternativo',
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={ store }> */}
    <ISSContextProvider>
      <App />
    </ISSContextProvider>
    {/* <ISSContext.Provider value={ INITIAL_STATE }>
        <ISSContextAlternativo.Provider value={ INITIAL_STATE_ALTERNATIVO }>
          <App />
        </ISSContextAlternativo.Provider>
      </ISSContext.Provider> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// Se eu usasse algo assim: <ISSContextProvider ALGUMA-COISA>
// EU PODERIA ME REFERENCIAR A ELA DEPOIS COMO UMA PROP

// já que usa algo assim:
/*

<ISSContextProvider>
<App />
</ISSContextProvider>

*/

// eu me referencio a ele mais tarde como 'children' (por isso usei children lá no ISSContextProvider)
