import axios from 'axios';
import { Product } from '../types/Product';
import { HttpStatus } from '../types/HttpStatus';

import { Request, Response, NextFunction } from 'express'; // https://stackoverflow.com/questions/34508081/how-to-add-typescript-definitions-to-express-req-res

export const listAllProducts = async (_req:Request, res:Response) => {
  try {
    const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');
    // const { data } = await axios.get<Array<Product>>('https://fakestoreapi.com/products'); // outra forma de se fazer
    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    res.status(HttpStatus.INTERNALERROR).json(error);
  }
}

export const getOneProduct = async (req: Request, res: Response) => {
  // const id = req.params.id as unknown as UM_TIPO_QUE_POSSO_CRIAR
  const id = req.params.id;

  try {
    const { data } = await axios.get<Product>(`https://fakestoreapi.com/products/${ id }`);
    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    res.status(HttpStatus.INTERNALERROR).json(error);
  }
}


// ---------------------- EXPLICAÇÃO

/*
const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');

  Na linha acima, fiz uma chamada get para a API fakestore. 
  Desconstruo o data, já que o array de produtos que eu quero está no data. Até aqui, sem novidade.

  Antes de criar meus tipos, se eu chegar o mouse em cima do axios.get, vou ver que ele espera que eu 
  passe alguns generics. Para esse projeto, vou passar o principal que é o 1º.

  Já que o data será um arrar de produtos, basta eu criar o tipo Produto e setar o generics
  como um array de produto (Product[])


*/