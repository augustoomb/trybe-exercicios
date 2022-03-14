//Faça a soma de todos os elementos do array
const numeros = [32, 15, 3, 2, -5, 56, 10];


const somador = (acumulador, numAtual) => acumulador = acumulador + numAtual;

const somaTotal = numeros.reduce(somador);

//console.log(somaTotal);



 
/* ***************************************************************************** */

//Busque o maior valor do array usando o reduce
const numbers = [50, 85, -30, 3, 15];


const buscarMaiorValor = (acumulador, valorAtual) => {
    if(valorAtual > acumulador){
        return valorAtual;
    }else{
        return acumulador;
    }
}

const maiorValor = numbers.reduce(buscarMaiorValor);

//console.log(maiorValor);




/* ***************************************************************************** */


//Faça uma função que some todos os valores pares do array

const nums = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somadorDePares = (acumulador, numAtual) => {
    if(numAtual % 2 === 0) {
        return acumulador + numAtual;
    }
    else {
        return acumulador;
    }
};

const somaDosNumPares = nums.reduce(somadorDePares);

//console.log(somaDosNumPares);



//-----



//mesmo exemplo acima, mas colocando tudo dentro de uma função:

// const somarPares = (arrNums) => {    

//     const somadorDePares = (acumulador, numAtual) => {
//         if(numAtual % 2 === 0) {
//             return acumulador + numAtual;
//         }
//         else {
//             return acumulador;
//         }
//     };

//     return arrNums.reduce(somadorDePares);
// }

// console.log(somarPares(nums));



/* ***************************************************************************** */


//crie uma função, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor (usar map e reduce)

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];


  const manipularEstudante = (estudante) => {
    
    const checarMaiorNota = (acum, notaAtual) => {
        if(notaAtual.nota > acum.nota){
            return notaAtual;
        }
        else {
            return acum;
        }
    }

    const maiorNota = estudante.materias.reduce(checarMaiorNota)

    return {
        name: estudante.nome,
        materia: maiorNota.name
    }
    
  }

  const novoArrEstudantes = estudantes.map(manipularEstudante)

  console.log(novoArrEstudantes);