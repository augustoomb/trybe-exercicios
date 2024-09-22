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

describe('6-Teste o componente <Pokemon.js />', () => {
  describe('se é renderizado um card com as informações de determinado pokémon', () => {
    test('O nome correto do pokémon deve ser mostrado na tela', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // de acordo com 'data.js', o unico "Eletric é o pikachu"

      // pegando o nome do pokemon mostrado na tela
      const pokName = screen.getByTestId('pokemon-name');
      expect(pokName.textContent).toEqual('Pikachu');
    });

    test('O tipo correto do pokémon deve ser mostrado na tela', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // se cliquei em 'eletric', espero que ele esteja na tela

      // pegando o tipo do pokemon mostrado na tela
      const pokType = screen.getByTestId('pokemon-type');
      expect(pokType.textContent).toEqual('Electric');
    });

    test('O peso médio do pokemon deve ser exibido...', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      const infoWeight = screen.getAllByTestId('pokemon-weight')[0].textContent; // todo o texto sobre o peso

      const labelWeight = infoWeight.split(':')[0]; // apenas o 'label', que espero depois que seja o 'Average weight'
      expect(labelWeight).toEqual('Average weight');

      const weight = parseFloat(infoWeight.split(' ')[2]); // so o peso (valor)
      expect(weight).not.toBeNaN();

      const unit = infoWeight.split(' ')[3]; // só a unidade de medida
      expect(unit).toEqual('kg');
    });

    test('A imagem do pokémon deve ser exibida...', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // pegando img pelo alt (pelos data.js, sei que pikachu é o unico 'eletric')
      const img = screen.getByRole('img', { name: /Pikachu sprite/i });
      expect(img).toBeInTheDocument();

      // acessando o 'src' da img selecionada
      expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    });
  });

  test('Se o card do pokémon indicado na Pokédex contém...', () => {
    const { history } = renderWithRouter(<App />);

    // testando pokemons "Eletric" (simplesmente escolhi um tipo)
    // clicar no btn "Eletric"
    const btnElectric = screen.getByRole('button', { name: 'Electric' });
    expect(btnElectric).toBeInTheDocument();
    userEvent.click(btnElectric);

    const linkDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkDetails).toBeInTheDocument();

    userEvent.click(linkDetails);

    // de acordo com data.js, pikachu deve ter id = 25
    const id = '25';

    const { pathname } = history.location; // pegando a url depois de ter clicado no botão de detalhes
    expect(pathname).toContain(id); // espero que a url tenha o id do pokemon
  });

  // test('Se ao clicar no link de navegação do pokémon, é feito...', () => {
  //   renderWithRouter(<App />);
  //   // o último teste atende.
  // });

  // test('Se a URL exibida no navegador muda...', () => {
  //   renderWithRouter(<App />);
  //   // o penúltimo teste atende.
  // });

  describe('se existe um ícone de estrela nos pokémons favoritados', () => {
    test('O ícone deve ser uma imagem com o atributo...', () => {
      renderWithRouter(<App />);

      // testando pokemons "Eletric" (simplesmente escolhi um tipo)
      // clicar no btn "Eletric"
      const btnElectric = screen.getByRole('button', { name: 'Electric' });
      expect(btnElectric).toBeInTheDocument();
      userEvent.click(btnElectric);

      // marcando unico pokemon "Eletric" (pikachu) como favorito
      const linkDetails = screen.getByRole('link', { name: 'More details' });
      expect(linkDetails).toBeInTheDocument();

      // entrando em 'more details'
      userEvent.click(linkDetails);

      // marcar pokemon como favorito na pag específica dele
      const checkFav = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
      expect(checkFav).toBeInTheDocument();
      userEvent.click(checkFav); // marcando como favorito
      expect(checkFav.checked).toEqual(true); // 'Espero' que checkbox esteja marcado. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role

      const imgFav = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
      expect(imgFav).toBeInTheDocument();

      expect(imgFav.src).toContain('/star-icon.svg');
    });

    // test('A imagem deve ter o atributo alt igual ...', () => {
    //   renderWithRouter(<App />);

    //   // o último teste atende.
    // });
  });
});
