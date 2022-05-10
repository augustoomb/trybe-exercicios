import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App'; // porque o App não foi importado com {} e o About foi? R: porque só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {}) e o App tomou esse espaço, então os outros componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do {}.

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início', });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {

    const render = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);

    const pathName = render.history.location.pathname;
    expect(pathName).toBe('/about')

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();

    // const { history } = renderWithRouter(<App />);

    // const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    // expect(aboutLink).toBeInTheDocument();
    // userEvent.click(aboutLink);

    // const { pathname } = history.location;
    // expect(pathname).toBe('/about');

    // const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    // expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const render = renderWithRouter(<App />);

    render.history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();

    // const { history } = renderWithRouter(<App />);
  
    // history.push('/pagina/que-nao-existe/');
  
    // const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    // expect(notFoundTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();


    // renderWithRouter(<About />);
  
    // const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    // expect(aboutTitle).toBeInTheDocument();
  });
});


//4º: escrever meus testes