import { render, screen } from '@testing-library/react';
import App from '../App';
import responseAPI from './mocks';

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI)
    })
    
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', () => {
    const titulo = screen.getByRole('heading', { level: 3, name: 'Rick Sanchez' })
    expect(titulo).toBeInTheDocument();
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const inputTexto = screen.getByRole('textbox');
    expect(inputTexto).toBeInTheDocument();

    const botaoBuscar = screen.getByRole('button', { name: 'Buscar' });
    expect(botaoBuscar).toBeInTheDocument();
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    const cardsSmith = screen.getAllByRole()
  })

})
