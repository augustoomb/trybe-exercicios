import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/* 1º passo para testar aplicação com rotas no RTL - react testing library: 
  -depois de instalar o router dom:   npm i react-router-dom@v5
  -envolver toda a aplicação com o BrowserRouter. Isso significa que o BrowserRouter precisa estar no index.js, envolvendo o <App />
*/
