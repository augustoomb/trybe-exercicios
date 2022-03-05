const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//EXERCÍCIO 1

/* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles:
 o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const adicionar = (objeto, chave, valor) =>{
  //(não funciona)objeto.chave = valor;
  objeto[chave] = valor;
}

adicionar(lesson2, 'turno', 'noite');

//console.log(lesson2);



//EXERCÍCIO 2

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const listarKeys = (obj) => Object.keys(obj);

//console.log(listarKeys(lesson3));



//EXERCÍCIO 3

/* Crie uma função para mostrar o tamanho de um objeto. */

const tamanhoObjeto = (obj) => Object.keys(obj).length;

//console.log(tamanhoObjeto(lesson1));


//EXERCÍCIO 4

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

const listarValoresObjeto = (obj) => Object.values(obj);

//console.log(listarValoresObjeto(lesson2));



//EXERCÍCIO 5

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3. */


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});/*chaves envolvendo os 'leassons' é importante.
Sem elas eu chamo os 3 objetos separadamente. Isso faria com que o allLessons receba os 3 em sua 'raiz. Com isso eu cairia
naquele problema de sobreescrever propriedades com nomes repetidos.*/

//console.log(allLessons);



//Exercício 6

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */


const numTotalEstudantes = (obj) => {

  let total = 0;
  let arrayDeChaves = Object.keys(obj) //lesson1, lesson2, lesson3

  for(let i=0; i<arrayDeChaves.length; i+=1) {
    total = total + (obj[arrayDeChaves[i]].numeroEstudantes);//lesson1.numEstu + lesson2.numEstu + lesson3.numEstu
  }

  return total;
}

//console.log(numTotalEstudantes(allLessons));





//EXERCÍCIO 7

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. */

const obterValorDaChave = (obj,posicao) => Object.values(obj)[posicao]; //Object.values me retorna um array

//console.log(obterValorDaChave(lesson1, 2))




//EXERCÍCIO 8
/* Crie uma função que verifique se o par (chave / valor) existe na função.
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/

const verificarChaveValor = (obj,chave,valor) => {
  const arrayRecebido = [chave,valor];
  const paresChaveValor = Object.entries(obj);
  for(let i=0; i<paresChaveValor.length; i+=1){
    if(Object.values(arrayRecebido)[0] == paresChaveValor[i][0] && Object.values(arrayRecebido)[1] == paresChaveValor[i][1]){
      return true;
    }
  }
  return false;
}

console.log(verificarChaveValor(lesson1, 'numeroEstudantes', 20));