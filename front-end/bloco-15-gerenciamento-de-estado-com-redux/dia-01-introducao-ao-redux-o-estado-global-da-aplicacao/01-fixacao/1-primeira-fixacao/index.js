const Redux = require('redux'); // importar redux

// se for node, uso require

// o obj dentro é a action(intenção). A função é o actionCreator
const fazerLogin = (email) => ({ // recebe um e-mail. Retorna um obj com as chaves 'type' e 'email'
  type: "LOGIN", // sempre vai ter type
  email: email,
});

// Inicialmente o state vem como undefined, e não queremos isto. Então iremos atribuir a ele um valor padrão.
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

// reducer geralmente é em outro arquivo. Desta vez é para fins didáticos
// O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store
const reducer = (state = ESTADO_INICIAL, action) => { // está sempre ouvindo se eu passar uma action no dispatch
  switch (action.type) {
    case "LOGIN":
      return {
        ...state, // sempre retornaremos um novo state. Sempre!
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

// Note, acima, que o reducer retorna todo o estado, e não somente o que será modificado. 
// Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action! 

// 1º) Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: O reducer
const store = Redux.createStore(reducer); // criando store

// Conseguimos mudar o estado da store utilizando o dispatch. Ele despacha nossa action para dentro do reducer
store.dispatch(fazerLogin("alguem@email.com"));

// logo depois do dispatch, nao posso confirar q o getState vai estar atualizado. Por isso preciso do subscribe
console.log(store.getState()); // (não confiar)

store.subscribe(() => { // so roda quando o dispath rodar
  console.log(store.getState()); // confiar

  // posso fazer atribuições e mudanças
});
