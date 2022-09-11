import axios from 'axios';
import { Response, Request } from 'express';
import { HttpStatus, Product, BuyParams } from './types';

export async function listAllProducts(_req: Request, res: Response<Product[]>): Promise<Response> {
  const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');

  const products: Product[] = data.map(product => ({...product, price: product.price * 100 }))

  return res.status(HttpStatus.OK).json(products)
}

export async function buyOneProduct(req: Request<unknown, unknown, unknown, BuyParams>, res: Response): Promise<Response> {
  const params = req.query;

  const { data } = await axios.get<Product>(`https://fakestoreapi.com/products/${Number(params.id)}`);

  return res.status(HttpStatus.CREATED).json({ message: `Você comprou ${params.qtd} x ${data.title} com o total de R$${data.price * Number(params.qtd)}`});
}

//

/*
na primeira função usei res: Response<Product[]>
estou dizendo que o resposta da minha função (response) só pode ser do tipo arr de Produto
se no res.status.json eu tentar setar algo que não seja um arr de Produto, o ts já avisa
*/


//

/*
req: Request<unknown, unknown, unknown, BuyParams>, res: Response

o tipo Request espera vários generics. No caso desse projeto, queremos tipar o 4º param, relacionado ao req.query
por isso, todos os outros foram setados com 'unknown' e apenas o 4º foi setado com BuyParams, que é 
um tipo criado por nós.
(se eu olhar no meu ex, onde não implementei isso, consigo, ao chegar o mouse no Request, ver a estrutura
  de generics)
*/

/*
  O retorno da função é do tipo response. Já usava isso sem saber.
  mas aqui, como estou tipando, posso colocar lá no fim (:Response)
  E preciso sempre colocar <Promise> Response, já que é uma função assíncrona
*/