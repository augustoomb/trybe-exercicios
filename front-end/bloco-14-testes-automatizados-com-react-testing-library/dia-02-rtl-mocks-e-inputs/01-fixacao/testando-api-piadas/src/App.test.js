// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks()); // faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock, isso é bem util para que não tenha interferência entre um teste e outro

it('fetches a joke', async () => {
  const joke = { // A constante joke cria um objeto similar ao que é retornado da API;
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch'); // espiona as chamadas da função fetch do objeto global, é por meio deste objeto global que conseguimos usar qualquer função do sistema
  global.fetch.mockResolvedValue({ // ao invés de fazer uma requisição a uma API externa será chamando nosso mock. O mockResolvedValue simula o retorno que o fetch teria
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.'); // estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});



  // estou dizendo: no meu código lá do App.js, onde tiver um 'fetch', substitua por essa função que estou criando (obviamente, so enquanto eu estiver testando)
  // já que vou simular o fetch, preciso sempre ver lá o que tenho de entrada e saída lá e fazer algo similar aqui