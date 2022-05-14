// 2º: só colocar o provider aqui

import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";

import store from './redux/store'; // store que eu criei. Sempre é obrigatório passar ao criar provider

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={ store }> 
    <App />,
  </Provider>,
  rootElement
);

