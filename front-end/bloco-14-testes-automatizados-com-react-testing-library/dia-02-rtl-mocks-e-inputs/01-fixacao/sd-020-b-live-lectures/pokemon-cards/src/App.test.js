import React from 'react';
import { screen, render, findByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de pesquisa', () => {
  test('se o título e a imagem de logo são exibidos na tela', () => {
    render(<App />);

    const titulo = screen.getByRole('heading', { level: 3, name: 'Pesquise um Pokemon' })
    expect(titulo).toBeInTheDocument();

    const imagem = screen.getByRole('img', { name: /logo/i }) // esse 'name' é o alt da imagem
    expect(imagem).toBeInTheDocument();
  });

  test('se exibe na tela o botão pesquisar e o input de texto', () => {
    render(<App />);

    const botao = screen.getByRole('button', { name: 'Pesquisar' });
    expect(botao).toBeInTheDocument();

    const inputTexto = screen.getByRole('textbox')
    expect(inputTexto).toBeInTheDocument();
  });

  it('deve digitar no campo de pesquisa', () => {
    render(<App />);

    const inputTexto = screen.getByRole('textbox')
    expect(inputTexto).toBeInTheDocument();

    userEvent.type(inputTexto, 'charmander')
    expect(inputTexto).toHaveValue('charmander'); // ou toHaveContent

  });

  it('deve exibir o cartão do pokemon quando clicar no botão de pesquisa', async () => {
    
    // parte apenas para entender o funcionanmento de mock
    const mockDoMoises = {cards: [{name: 'Mockzés', types: ['Divisor', 'Água'], imageUrl: 'https://...'}]} // criando um objeto simulado para fingir ser o retorno da chamada da API

    global.fetch = jest.fn().mockResolvedValue({ //'trocando' a função fetch (a que já conheço para chamar APIs. Ela fica dentro de 'global' do node) por uma que estou criando. Preciso usar o jest.fn ppois é assim que crio um mock da função. o mockResolvedValue diz "estou resolvendo a função assincrona". E resolvendo, eu tenho uma chave JSON (assim como eu tenho quando chamo o fetch normal, sem mockar)
      json: jest.fn().mockResolvedValue(mockDoMoises) // ... e aqui eu digo que a resolução dessa parte terá dentro o obj mockDoMoises
    })
    // fim da parte apenas para entender o funcionanmento de mock


    //ao inves de atribuir algo diretamente pro fetch com feito acima, posso fazer o spyOn. Ele só vai 'espiar' e simular algo para a função, sem trocar ela de fato
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDoMoises)
    })
    // fim do 'ao inves de atribuir...'





    render(<App />);

    const inputTexto = screen.getByRole('textbox')
    expect(inputTexto).toBeInTheDocument();

    userEvent.type(inputTexto, 'charmander')
    expect(inputTexto).toHaveValue('charmander'); // ou toHaveContent

    const botao = screen.getByRole('button', { name: 'Pesquisar' });
    expect(botao).toBeInTheDocument();

    userEvent.click(botao);

    //apenas testando se a mock lá de cima é chamada. (É chamada, já que teve o click do botão na linha acima)
    expect(global.fetch).toHaveBeenCalled();

    const tituloPokemon = await screen.findByRole('heading', {level: 3, name: /mockzés/i });
    //fim de 'apenas testando se a mock lá de cima é chamada'


    // const tituloPokemon = await screen.findByRole('img', { name: 'Charmander-card' });

    expect(tituloPokemon).toBeInTheDocument();

    // aqui restauro todos os mocks que fiz lá em cima. Mas só funciona se eu usar o spyOn. Se eu alterar diretamente o fetch, não adiantar desfazer mock
    // jest.restoreAllMocks();
    
  });

  it('deve manter o valor original de fetch', () => {
    console.log(global.fetch());
  });
});
