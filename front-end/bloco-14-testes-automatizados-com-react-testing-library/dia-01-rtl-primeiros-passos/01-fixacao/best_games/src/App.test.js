import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test.only carrega só ele; test.skip só PULA ele
describe('Exercício dos games', () => {
  test('"Carregando..." é renderizada na tela quando a aplicação é iniciada', () => { 
    render(<App />);
    
    const carregando = screen.getByText(/carregando/i);
    expect(carregando).toBeInTheDocument();
  });

  test('Verifica se o jogo com o texto Minecraft é renderizado na tela após a saída do carregando.', async () => {
    render(<App />);

    const carregando = screen.getByText(/carregando/i);
    expect(carregando).toBeInTheDocument();

    await waitForElementToBeRemoved(carregando);

    const tituloMinecraft = screen.getByRole('heading', { level: 3, name: 'Minecraft' }) // eu queria escrever h3; porém, o RTS exige outro formato. Pesquise no google "aria role h3". No primeiro resultado, entrar e ver a tabelinha
    expect(tituloMinecraft).toBeInTheDocument();

  });

  test('Verifique se a tela de detalhes exibe as informações Release Year e Sales...', async () => {
    render(<App />);

    const carregando = screen.getByText(/carregando/i);
    expect(carregando).toBeInTheDocument();

    await waitForElementToBeRemoved(carregando);

    const linksDetalhes = screen.getAllByText(/ver detalhes/i)
    expect(linksDetalhes[1]).toBeInTheDocument();

    userEvent.click(linksDetalhes[1]);

    await waitForElementToBeRemoved(carregando);

    const releaseYear = screen.getByText(/Release Year:/i);
    expect(releaseYear).toBeInTheDocument();
    const sales = screen.getByText(/Sales:/i);
    expect(sales).toBeInTheDocument();
  });
});


/*
Exercício 1
Escreva um teste que verifica se a palavra 'Carregando...' é renderizada na tela quando a aplicação é iniciada.

Exercício 2
Usando assincronicidade, escreva um teste que verifica se o jogo com o texto Minecraft é renderizado na tela
após a saída do carregando.

Exercício 3
Na home do projeto, após o carregamento da lista de jogos, clique no link Ver detalhes do segundo jogo da lista.
E verifique se a tela de detalhes exibe as informações Release Year e Sales, do jogo correspondente.
*/