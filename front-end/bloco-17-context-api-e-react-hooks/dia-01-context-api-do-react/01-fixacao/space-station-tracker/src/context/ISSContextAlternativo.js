import { createContext } from 'react';

// const INITIAL_STATE = {};
const ISSContext = createContext();
export default ISSContext;

// ACTION obj { type }

// React.Context obj { Provider, Consumer }
// ISSContext.Provider e ISSContext.Consumer

// armazenamento, disponibilização, leitura e escrita

// disponibilização => Provider
// leitura = Consumer

// escrita = ?

// redux usa Provider do React-Redux

// O resultado de um createContext será um obj
// MyContext = { Provider, Consumer }
