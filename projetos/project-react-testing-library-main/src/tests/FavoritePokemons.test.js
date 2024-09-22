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

describe('3-Teste o componente <FavoritePokemons.js />', () => {
  test('se é exibida na tela a mensagem No favorite pokemon found...', () => {
    renderWithRouter(<App />);

    // ir para a pag FavoritePokemons
    const linkFavPok = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavPok).toBeInTheDocument();
    userEvent.click(linkFavPok);

    // ver se ao seguir o fluxo simples(sem add pokemons), a tela mostra a mensagem pedida
    const texNoFavPok = screen.getByText(/No favorite pokemon found/i);
    expect(texNoFavPok).toBeInTheDocument();
  });

  test('se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    // clicar no 'more details' do pokemon default(pikachu)
    const moreDetailsBtn = screen.getByText(/More details/i);
    expect(moreDetailsBtn).toBeInTheDocument();
    userEvent.click(moreDetailsBtn);

    // marcar pokemon como favorito na pag específica dele
    const checkFav = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
    expect(checkFav).toBeInTheDocument();
    userEvent.click(checkFav); // marcando como favorito
    expect(checkFav.checked).toEqual(true); // 'Espero' que checkbox esteja marcado. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role

    // ir para a pag favorite pokemons
    const linkFavPok = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavPok).toBeInTheDocument();
    userEvent.click(linkFavPok);

    // verificando se o pokemon escolhido está na lista de favoritos
    const pokeName = screen.getByTestId('pokemon-name');
    expect(pokeName.textContent).toEqual('Pikachu');
  });
});
