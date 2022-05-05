import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />); // o componente precisa de props para funcionar, então passamos uma props para testar!
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o texto de status do e-mail só aparece quando um e-mail é enviado.', () => {
  render(<ValidEmail email="" />);
  const textStatus = screen.queryByTestId('queryByTestId');
  expect(textStatus).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const textStatus = screen.getByTestId('id-is-email-valid');
  expect(textStatus).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const textStatus = screen.getByTestId('id-is-email-valid');
  expect(textStatus).toHaveAttribute('class', 'red-text');
});