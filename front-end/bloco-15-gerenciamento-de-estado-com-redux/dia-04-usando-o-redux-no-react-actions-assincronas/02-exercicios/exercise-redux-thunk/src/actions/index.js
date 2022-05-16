export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ 
  type: REQUEST_API
});

export const getPicture = (data) => ({
  type: GET_PICTURE, data
});


export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  return(dispatch) => {
    dispatch(requestAPI());
    return fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(json => dispatch(getPicture(json)))
  }
}

/*

O que muda em relação a uma action 100% sincrona é essa função (fetchAPI).
No projeto sincrono, no componente, eu faço um dispatch e chamo o action.
chegando aqui ela tem simplesmente as funções que contem os 'types' e nada mais

No caso desse projeto(assincrono), temos essa fnção fetchAPI

É como se no sincrono tivéssemos: COMPONENTE>DISPATCH>ACTION>REDUCER...
No Assincrono: COMPONENTE>DISPATCH>ACTION-FETCHAPI>ACTION-REQUESTAPI>REDUCER....

*/

/*
A grande diferença do redux assincrono e o sincrono nesse ponto é:
sempre pro componente será transparente, ou seja, ele não verá a diferença

-Sincrono(ex de form que fiz):
  Lá no componente eu dou um dispatch e já chamo essa action aqui do arquivo
  Aqui na action já chegam os dados pronto lá do form
  Eu só pego esses dados e trabalho junto ao reduce


-Assincrono
  Lá do componente só vem o pedido(EI! PEGUE OS DADOS NUMA API PRA MIM (UMA API QUE NÃO SEI ONDE FICA!) )
  Aqui é que será feita a requisição e a obtenção dos dados
  Com os dados em mãos, segue o fluxo de trabalho com o reduce
  Aqui eu não terei os dados escritos como um obj igual tenho no sincrono.
  Aqui será uma req/resp à API
*/