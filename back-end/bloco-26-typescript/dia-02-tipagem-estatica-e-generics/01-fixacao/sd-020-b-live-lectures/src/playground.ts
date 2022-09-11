const nome: string = "Andre";
const logado: boolean = true;
const saldo: number = 10000;

const arraNumb: number[] = [1, 2, 3, 4]
const arraNumbStr: (number | string)[] = [1, 2, 3, 4, "a", "b", "c"]
const arraNumbStr2: Array<string | number> = [1, 2, 3, 4, "a", "b", "c"]

const tupla: [string, number ] = ["a", 2]

let naoRecomendado: any = 'asdfasd';
let desconhecido: unknown;

function example(cb: unknown) {
  if(typeof cb === 'function')
    cb();

  if(typeof cb === 'string')
    cb.split('')
}

interface a {
  a: string;
  b: string;
}

interface c extends a {
  c: string
}

const obj: c = { a: 'a', b: 'a', c: 'c'}

interface Endereco {
  rua: string,
  bairro: string,
}

type CLTPJ = {
  contrato: string
}

type Profissao = {
  cargo: string,
  salario: number
} & CLTPJ // usar & funciona da mesma forma que o extends na INTERFACE


type Pessoa<Type> = {
  nome: string,
  idade: number,
  informacoes: Type
}

class PessoaClasse {
  nome: string = "";
  cpf: string = "";
}

const pessoaNova: PessoaClasse = {
  cpf: '123.456.789-10',
  nome: 'Andre'
}


// const andre: Pessoa<Endereco> = {
//   nome: 'Andre',
//   idade: 16,
//   informacoes: { rua: 'Rua #01', bairro: 'Dragon Ball'}
// }

// const zambelli: Pessoa<Profissao> = {
//   nome: 'Zambelli',
//   idade: 18,
//   informacoes: { cargo: 'Desenvolvedor Senior', salario: 35000 }
// }


function cadastra<Type>(nome, idade, informacoes: Type) {
  return { nome, idade, informacoes }
}

const zambelli = cadastra<Profissao>('Zambelli', 18, { cargo: 'Desenvolvedor Senior', salario: 35000, contrato: 'CLT' })
const andre = cadastra<Endereco>('Andre', 18, { rua: 'Rua #01', bairro: 'Dragon Ball'})

console.log(andre.nome);
console.log(andre.informacoes.bairro);
console.log(zambelli.nome);
console.log(zambelli.informacoes.cargo);


function example2<X, Y, Z>(a: X, b: Y, c: Z) {
  return { a, b, c}
}

console.log(example2<boolean, number, string>(true, 123, 'asb'));

 