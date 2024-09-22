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
// export default renderWithRouter;

describe('1. Teste o componente <App.js />', () => {
  test('se o topo da aplicação contém um conjunto fixo de links de navegação.', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    const linkFavPok = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavPok).toBeInTheDocument();
  });

  test('se a aplicação é direcionada para a página inicial ao clicar no Nav Home', () => {
    const { history } = renderWithRouter(<App />);

    // ir para outra pag, para de lá testar o 'link home' corretamente
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    // confirmar se cheguei no 'about'
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    // ver se linkHome está disponível
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();

    // clicar no linkHome
    userEvent.click(linkHome);

    // confirmar se cheguei na 'home'
    const path = history.location.pathname;
    expect(path).toBe('/');
  });

  test('se a aplicação é direcionada para a página about ao clicar no Nav About', () => {
    const { history } = renderWithRouter(<App />);

    // ver se link About está disponível
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    // clicar no link About
    userEvent.click(linkAbout);

    // confirmar se cheguei na 'about'
    const path = history.location.pathname;
    expect(path).toBe('/about');
  });

  test('se a aplicação é direcionada para a página PokeFav ao clicar no Nav', () => {
    const { history } = renderWithRouter(<App />);

    // ver se link PokFav está disponível
    const linkPokFav = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkPokFav).toBeInTheDocument();

    // clicar no linkPokFav
    userEvent.click(linkPokFav);

    // confirmar se cheguei na 'PokFav'
    const path = history.location.pathname;
    expect(path).toBe('/favorites');
  });

  test('se a aplicação é direcionada para a página NotFound ao entrar em uma URL', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/url-desconhecida');

    const notFoundImg = screen.getByRole('img',
      { name: /Pikachu crying because the page requested was not found/i });
    expect(notFoundImg).toBeInTheDocument();
  });
});
