import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

describe('4-Teste o componente <NotFound.js />', () => {
  test('se a página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);

    // indo 'manualmente' para a 'not-found'
    history.push('url-que-nao-existe');

    // verificando se existe o h2 solicitado
    const textH2 = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });
    expect(textH2).toBeInTheDocument();
  });

  test('se a página mostra img especificada', () => {
    const { history } = renderWithRouter(<App />);

    // indo 'manualmente' para a 'not-found'
    history.push('url-que-nao-existe');

    // pegando img pelo 'alt'
    const img = screen.getByRole('img',
      { name: 'Pikachu crying because the page requested was not found' });
    expect(img).toBeInTheDocument();

    // acessando 'src' da img selecionada
    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
