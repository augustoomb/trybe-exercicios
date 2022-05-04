import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />); // onde está?
//   const linkElement = screen.getByText(/learn react/i); // Seletores: pegando o que quero testar (getByText, getAllByRole, getByTestId, etc)
//   expect(linkElement).toBeInTheDocument(); // Matchers: testando
//   // posso usar vários expects no mesmo test
//   // outras opções: toHaveValue, toHaveLength, etc
// });

// /*
// ETAPAS:

//   -Criar o trecho 'test' + descrição do teste
//   -usar o screen(que foi importado) + seletor que eu quiser (pegar pelo texto, pelo label, etc)
//   -Dentro de seletor, dizer o que eu busco ('learn react'), por ex.
//   -Salvar em uma variável
//   -Usar o expect e testar se o que está na variável está no documento

// */ 

// test('Input de teste está aparecendo na tela?', () => {
//   render(<App />);
//   const inputEmail = screen.getByLabelText('Email');
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail).toHaveProperty('type', 'email');
// });

// // test('Verificando se existe um botão', () => {
// //   render(<App />);
// //   const btn = screen.getByRole('button');
// //   expect(btn).toBeInTheDocument();
// // });

// test('Verificar se existem dois botões', () => {
//   render(<App />);
//   const buttons = screen.getAllByRole('button');
//   expect(buttons).toHaveLength(2);
//   // Não precisamos usar o toBeInTheDocument
// });

// test('Verificando se existe um botão de enviar', () => {
//   render(<App />);
//   const btnSend = screen.getByTestId('id-send');
//   expect(btnSend).toBeInTheDocument();
//   expect(btnSend).toHaveProperty('type', 'button');
//   expect(btnSend).toHaveValue('Enviar');
// });




// testando a partir de agora, comportamentos e eventos...

describe("Testes de comportamento e eventos", () => { // describe é opcional. É apenas para agrupar vários testes do mesmo assunto. Curiosidade: No avaliador dos projetos, cada requisito é um 'describe' e cada 'test' (ou 'it') é uma tarefa de dentro do requisito

  test('Verificando se o botão e o campo e-mail estão funcionando.', () => {
    render(<App />);

    /* RESOLUÇÃO VÍDEO DO COURSE */

    // pegando elementos da tela
    const inputEmail = screen.getByLabelText('Email'); // pegando input
    const button = screen.getByTestId('id-send'); // pegando botão enviar
    const userEmail = screen.getByTestId('id-email-user'); // pegando texto onde será exibido o e-mail salvo no state

    //interagir com elementos
    userEvent.type(inputEmail, 'teste@teste.com' ) //1º param: qual é o input? - 2º param: Qual o valor que o input deve receber ?  EXPLICAÇÃO: SIMPLES! SIMULA UM USUÁRIO DIGITANDO NO CAMPO. SIMPLESMENTE DIGITA O QUE EU PASSEI NO 2º PARAM NO INPUT QUE EU PEDI NO 1º PARAM; Ainda não é hora de testar!!!
    userEvent.click(button);
    
    //fazer os testes (depois que eu cliquei no button, espero...)
    expect(inputEmail).toHaveValue(''); // no código mandei zerar o campo ao clicar no botão
    expect(userEmail).toHaveTextContent('Valor: teste@teste.com');
    
    
    
    /* RESOLUÇÃO PARTE ESCRITA DO COURSE (DÁ NO MESMO!) */
    // const email_user = 'email@email.com';

    // const textEmail = screen.getByTestId('id-email-user');
    // expect(textEmail).toBeInTheDocument();
    // expect(textEmail).toHaveTextContent('Valor:');

    // const btnSend = screen.getByTestId('id-send');
    // const inputEmail = screen.getByLabelText('Email');
    // userEvent.type(inputEmail, email_user); // se eu passasse o 3º param (delay), seria assincrono. Se não passar, padrão é 0
    // userEvent.click(btnSend);

    // expect(inputEmail).toHaveValue('');
    // expect(textEmail).toHaveTextContent(`Valor: ${ email_user }`);
  });

});
