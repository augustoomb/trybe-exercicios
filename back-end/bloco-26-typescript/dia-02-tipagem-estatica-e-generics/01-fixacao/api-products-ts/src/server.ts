import express from 'express';
import { listAllProducts, getOneProduct } from './controllers/products';

const app = express();

app.get('/', listAllProducts);
app.get('/:id', getOneProduct);

app.listen(3000, () => console.log('Rodando na porta 3000'))