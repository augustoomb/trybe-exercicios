import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdicionar = screen.queryByText('Adicionar');

    listTodo.forEach((todo) => {
      userEvent.type(inputTask, todo);
      userEvent.click(buttonAdicionar);
    });

    listTodo.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Minha Tarefa" />);

    expect(screen.getByText('Minha Tarefa')).toBeInTheDocument();
  });
});
