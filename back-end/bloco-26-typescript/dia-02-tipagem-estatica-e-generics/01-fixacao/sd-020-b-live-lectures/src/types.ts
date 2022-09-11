export type Product = {
  id: number,
  title: string,
  price: number,
  description: string
}

export type BuyParams = {
  id: number;
  qtd: number;
}

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  INTERNALERROR= 500
};
