"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProduct = exports.listAllProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const HttpStatus_1 = require("../types/HttpStatus");
const listAllProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get('https://fakestoreapi.com/products');
        // const { data } = await axios.get<Array<Product>>('https://fakestoreapi.com/products'); // outra forma de se fazer
        res.status(HttpStatus_1.HttpStatus.OK).json(data);
    }
    catch (error) {
        res.status(HttpStatus_1.HttpStatus.INTERNALERROR).json(error);
    }
});
exports.listAllProducts = listAllProducts;
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const { data } = yield axios_1.default.get(`https://fakestoreapi.com/products/${id}`);
        res.status(HttpStatus_1.HttpStatus.OK).json(data);
    }
    catch (error) {
        res.status(HttpStatus_1.HttpStatus.INTERNALERROR).json(error);
    }
});
exports.getOneProduct = getOneProduct;
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
