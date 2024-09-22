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

const moreDetails = 'More details';
const pikachuLocation = 'Pikachu location';

describe('7-Teste o componente <PokemonDetails.js />', () => {
  describe('se as informações detalhadas do pokémon selecionado são mostradas', () => {
    test('página deve conter um texto <name> Details...', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // pegando o nome do pokemon no titulo h2
      const titleH2 = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
      expect(titleH2).toBeInTheDocument();
    });

    test('Não deve existir o link de navegação para os detalhes', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // depois de entrar na pag de detalhes, o 'link details' nao deve mais aparecer
      expect(linkDetails).not.toBeInTheDocument();
    });

    test('A seção de detalhes deve conter um heading h2 com o texto Summary.', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // summary
      const titleH2 = screen.getByRole('heading', { level: 2, name: 'Summary' });
      expect(titleH2).toBeInTheDocument();
    });

    test('A seção de detalhes deve conter um parágrafo com o resumo do pokémon.', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // de acordo com o arquivo data.js, esse é o resumo do pikachu: 'This intelligent Pokémon roasts...'
      const p = screen.getByText(/This intelligent Pokémon roasts/i);
      expect(p).toBeInTheDocument();
    });
  });

  describe('existe na página uma seção com os mapas das localizações do pokémon', () => {
    test('Deverá existir um heading h2 com o texto Game...', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      const titleH2 = screen.getByRole('heading',
        { level: 2, name: 'Game Locations of Pikachu' });
      expect(titleH2).toBeInTheDocument();
    });

    test('as localizações do pokémon devem ser mostradas na seção de detalhes', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // pegando imgs pelo alt
      const imgs = screen.getAllByRole('img', { name: pikachuLocation });

      expect(imgs).toHaveLength(2); // de acordo com o arquivo data.js, há duas localizações para o pikachu
    });

    test('Devem ser exibidos o nome da localização e uma imagem do mapa', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // pegando imgs pelo alt
      const imgs = screen.getAllByRole('img', { name: pikachuLocation });
      expect(imgs).toHaveLength(2); // de acordo com o arquivo data.js, há duas localizações para o pikachu

      // de acordo com o arquivo data.js, esse é o nome da localiz1: Kanto Viridian Forest
      const p1 = screen.getByText(/Kanto Viridian Forest/i);
      expect(p1).toBeInTheDocument();

      // de acordo com o arquivo data.js, esse é o nome da localiz2: Kanto Power Plant
      const p2 = screen.getByText(/Kanto Power Plant/i);
      expect(p2).toBeInTheDocument();
    });

    test('A imagem da localização deve ter um atributo src', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // pegando imgs pelo alt
      const imgs = screen.getAllByRole('img', { name: pikachuLocation }); // pegando pelo alt
      expect(imgs).toHaveLength(2); // de acordo com o arquivo data.js, há duas localizações para o pikachu

      expect(imgs[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
      expect(imgs[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    });

    test('A imagem da localização deve ter um atributo alt...', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      // pegando imgs pelo alt
      const imgs = screen.getAllByRole('img', { name: /Pikachu location/i }); // pegando pelo alt
      expect(imgs).toHaveLength(2); // de acordo com o arquivo data.js, há duas localizações para o pikachu
      expect(imgs[0].alt).toContain(pikachuLocation);
      expect(imgs[1].alt).toContain(pikachuLocation);
    });
  });

  describe('se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    test('página deve exibir um checkbox que permite favoritar o pokémon', () => {
      renderWithRouter(<App />);
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      const checkFav = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
      expect(checkFav).toBeInTheDocument();
    });

    test('Cliques alternados no checkbox devem adicionar e remover do favoritos', () => {
      renderWithRouter(<App />);
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // entrando nos detalhes do pokemon
      const linkDetails = screen.getByRole('link', { name: moreDetails });
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      const checkFav = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
      expect(checkFav).toBeInTheDocument();
      userEvent.click(checkFav); // marcando como favorito
      expect(checkFav.checked).toEqual(true); // 'Espero' que checkbox esteja marcado.

      // ir para a pag favorite pokemons
      const linkFavPok = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(linkFavPok).toBeInTheDocument();
      userEvent.click(linkFavPok);

      // verificando se o pokemon escolhido está na lista de favoritos
      const pokeName = screen.getByTestId('pokemon-name');
      expect(pokeName.textContent).toEqual('Pikachu');
    });
  });
});
