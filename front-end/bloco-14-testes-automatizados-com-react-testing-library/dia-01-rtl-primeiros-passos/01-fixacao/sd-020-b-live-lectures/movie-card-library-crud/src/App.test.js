import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Loading } from './components';

describe('bloco de teste', () => {
  it('deveria resolver um problema', async () => {
    render(<App />);
    const carregando = screen.getByText(/carregando/i); // i (insensitive case);  /SE-CHAMA-REGEX/
    expect(carregando).toBeInTheDocument();

    await waitForElementToBeRemoved(carregando);
    
    const titulo = screen.getByText('Kingsglaive');
    expect(titulo).toBeInTheDocument();
  });

  test('ao clicar em ver detalhes, ver se tem o subtitulo Final Fantasy XV', async () => {
    // const { debug } = render(<App />); // bonus: fazer essa atribuição e executar lá em baixo para....

    render(<App />);

    //inicio do bloco "esperando o carregar sumir da tela"
    const carregando = screen.getByText(/carregando/i); 
    expect(carregando).toBeInTheDocument();

    await waitForElementToBeRemoved(carregando);
    //fim do bloco "esperando o carregar sumir da tela"

    //inicio do bloco "pegando botão ver detalhes" (jeito 1)
    const links = screen.getAllByText(/ver detalhes/i);
    expect(links[0]).toBeInTheDocument();
    //fim do bloco "pegando botão ver detalhes" (jeito 1)

    //inicio do bloco "pegando botão ver detalhes" (jeito 2)
    const link = screen.getByTestId('KingsglaiveDetails')
    expect(link).toBeInTheDocument();
    //fim do bloco "pegando botão ver detalhes" (jeito 2)

    //user event para clicar no botão(OBS: versão 14 do userEvent tem outra forma de usar. Ver 14.1 aula ao vivo)
    userEvent.click(link);

    //espera um novo 'carregando' na tela. Eu poderia fazer com o waitForElementToBeRemoved já criado, mas fiz diferente (com o findBy) para ter para consulta
    const subtituloDoFilme = await screen.findByText('Subtitle: Final Fantasy XV'); //opcional usar um 2º param: { timeout: 3000 } ; tempo de espera em milesegundos
    expect(subtituloDoFilme).toBeInTheDocument();

    //debug() // bonus: mostrar o que está sendo executado no momento

    //apenas um bonus para usar o query:
    const subtituloDoFilmeErrado = screen.queryByText('Subtitle: Spirits Within');
    expect(subtituloDoFilmeErrado).not.toBeInTheDocument();

  });

  test('testando loading', () => {
    render(<Loading />); // se tiver props, devo testar. Tem ex. nos exerc. do course
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });
});




/*
const { debug } = render(<App />);
    // console.log(retornoDoRender)
    const carregando = screen.getByText(/carregando/i);
    expect(carregando).toBeInTheDocument();
    await waitForElementToBeRemoved(carregando);
    const links = screen.getAllByText(/ver detalhes/i);
    expect(links[0]).toBeInTheDocument();

    const link = screen.getByTestId('KingsglaiveDetails');
    expect(link).toBeInTheDocument();
    // userEvent.setup();
    userEvent.click(link);
    // debug();

    const subtituloDoFilme = await screen.findByText('Subtitle: Final Fantasy XV');
    expect(subtituloDoFilme).toBeInTheDocument();

    const subtituloDoFilmeErrado = screen.queryByText('Subtitle: Spirits Within');
    expect(subtituloDoFilmeErrado).not.toBeInTheDocument();
*/