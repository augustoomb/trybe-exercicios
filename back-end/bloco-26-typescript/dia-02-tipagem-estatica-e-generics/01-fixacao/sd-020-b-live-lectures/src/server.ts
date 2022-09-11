import express from 'express';
import { listAllProducts, buyOneProduct } from './controller';

const app = express();

app.get('/', (req, res) => res.json({ ok: true }))

app.get('/products/list', listAllProducts);
app.get('/products', buyOneProduct);

app.listen(3001, () => console.log(`Running on port 3001`));