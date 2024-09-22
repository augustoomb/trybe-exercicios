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

describe('Teste o componente <About.js />', () => {
  test('se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<App />);

    // ir para a pag about
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    // ver se a pag about tem o h2 informado
    const titleH2 = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(titleH2).toBeInTheDocument();
  });

  test('se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<App />);

    // ir para a pag about
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    // testando parag.1
    const p1 = screen.getByText(/This application/i);
    expect(p1).toBeInTheDocument();

    // testando parag.2
    const p2 = screen.getByText(/One can filter/i);
    expect(p2).toBeInTheDocument();
  });

  test('se a página contém img de pokedex', () => {
    renderWithRouter(<App />);

    // ir para a pag about
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    // pegando img pelo alt
    const img = screen.getByRole('img', { name: 'Pokédex' });
    expect(img).toBeInTheDocument();

    // acessando o 'src' da img já selecionada: https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
