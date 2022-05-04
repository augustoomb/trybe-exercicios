import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByText('Adicionar');
    expect(button).toBeInTheDocument();
    // expect(button).toHaveProperty('type', 'button'); // meu
    expect(button.type).toBe('button'); // gabarito
  });

  test('Ao clicar no botão Adicionar a task deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdicionar = screen.queryByText('Adicionar');

    userEvent.type(inputTask, 'tarefa1');
    userEvent.click(buttonAdicionar);

    expect(screen.queryByText('tarefa1')).toBeInTheDocument();
  });
});
