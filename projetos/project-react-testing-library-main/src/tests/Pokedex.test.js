import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

const proximoPokemon = 'Próximo pokémon';
const pokemonName = 'pokemon-name';

describe('5. Teste o componente <Pokedex.js />', () => {
  test('se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    // verifica se tem h2 na pag
    const titleH2 = screen.getByRole('heading',
      { level: 2, name: 'Encountered pokémons' });
    expect(titleH2).toBeInTheDocument();
  });

  describe('se é exibido o próximo pokémon da lista quando o botão Próximo..', () => {
    test('botão deve conter o texto Próximo pokémon', () => {
      renderWithRouter(<App />);

      const btnProxPok = screen.getByRole('button', { name: proximoPokemon });
      expect(btnProxPok).toBeInTheDocument();
    });

    test('se próximos pok são mostrados ao clicar no botão "próximo"', () => {
      renderWithRouter(<App />);

      // selecionando o botão 'prox'.
      const btnProxPok = screen.getByRole('button', { name: proximoPokemon });
      expect(btnProxPok).toBeInTheDocument();

      // usando pokemons fire para teste
      const btnFire = screen.getByRole('button', { name: 'Fire' });
      expect(btnFire).toBeInTheDocument();
      userEvent.click(btnFire);

      // pegando primeiro pokemon fire (nome confirmado pelo data.js)
      const pokName1 = screen.getByTestId(pokemonName);
      expect(pokName1.textContent).toEqual('Charmander');

      // passando para o "próximo"
      userEvent.click(btnProxPok);

      // pegando um pokemon depois de clicar em "próximo"
      const pokName2 = screen.getByTestId(pokemonName);
      expect(pokName2.textContent).not.toEqual('Charmander'); // verificando se esse segundo pokemon é diferente do primeiro
    });

    test('se é mostrado um pokemon por vez', () => {
      renderWithRouter(<App />);

      // pego todos os elementos que tenham o testId destinado a mostrar o nome...
      const poksName = screen.getAllByTestId(pokemonName);

      // ... e espero que o arr só tenha um elemento
      expect(poksName).toHaveLength(1);
    });
  });

  describe('Teste se a Pokédex tem os botões de filtro', () => {
    test('se existe um botão para cada tipo de pokemon, sem repetição', () => {
      renderWithRouter(<App />);

      // de acordo com os dados, são 7 tipos:
      const size = 7;

      // pegar todos os btn de filtro (exceto o all)
      const allFilterBtns = screen.getAllByTestId('pokemon-type-button');

      // espero que existam apenas 7 botões
      expect(allFilterBtns).toHaveLength(size);
    });

    test('ao selecionar tipo, deve circular somente por pokemons desse tipo', () => {
      renderWithRouter(<App />);

      const pokemonType = 'pokemon-type';

      // selecionando btn prox
      const btnProxPok = screen.getByRole('button', { name: proximoPokemon });

      // usando pokemons 'fire' para teste
      const btnFire = screen.getByRole('button', { name: 'Fire' });
      expect(btnFire).toBeInTheDocument();

      // clicando no botão 'fire'
      userEvent.click(btnFire);

      // pegando o tipo do 1º pok filtrado
      const pokType1 = screen.getByTestId(pokemonType);
      expect(pokType1.textContent).toEqual('Fire'); // espero que ele seja fire

      // indo para o proximo
      expect(btnProxPok).toBeInTheDocument();
      userEvent.click(btnProxPok);

      // pegando o tipo do 2º pok filtrado
      const pokType2 = screen.getByTestId(pokemonType);
      expect(pokType2.textContent).toEqual('Fire'); // espero que ele seja fire

      // sei pelo arquivo de dados que só há 2 elementos...
    });

    test('texto do botão deve corresponder ao nome do tipo', () => {
      renderWithRouter(<App />);

      // arr com todos os btn (exceto 'all')
      const allFilterBtns = screen.getAllByTestId('pokemon-type-button');

      // verificando posições
      expect(allFilterBtns[0].textContent).toEqual('Electric');
      expect(allFilterBtns[1].textContent).toEqual('Fire');
      expect(allFilterBtns[2].textContent).toEqual('Bug');
      expect(allFilterBtns[3].textContent).toEqual('Poison');
      expect(allFilterBtns[4].textContent).toEqual('Psychic');
      expect(allFilterBtns[5].textContent).toEqual('Normal');
      expect(allFilterBtns[6].textContent).toEqual('Dragon');
    });

    test('O botão All precisa estar sempre visível', () => {
      renderWithRouter(<App />);

      const btnAll = screen.getByRole('button', { name: /All/i });
      expect(btnAll).toBeInTheDocument();
    });
  });

  describe('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    test('O texto do botão deve ser All', () => {
      renderWithRouter(<App />);

      const btnAll = screen.getByText('All');
      expect(btnAll).toBeInTheDocument();
    });

    test('Mostrar todos os tipos se btn All for clicado', () => {
      renderWithRouter(<App />);

      const btnAll = screen.getByText('All');
      expect(btnAll).toBeInTheDocument();

      userEvent.click(btnAll);

      // tipo do pokemon padrão inicial (pikachu)
      const typeDefault = 'Electric';

      // clicando para ver o proximo
      const btnProxPok = screen.getByRole('button', { name: proximoPokemon });
      expect(btnProxPok).toBeInTheDocument();
      userEvent.click(btnProxPok);

      // pegando tipo do 'proximo'
      const pokType = screen.getByTestId('pokemon-type');
      expect(pokType).toBeInTheDocument();

      // espero que o tipo do 2º pokemon(acima) não seja igual a eletric. Assim, sei que a busca trafega por todos os tipos
      expect(pokType.textContent).not.toEqual(typeDefault);
    });
  });
});
