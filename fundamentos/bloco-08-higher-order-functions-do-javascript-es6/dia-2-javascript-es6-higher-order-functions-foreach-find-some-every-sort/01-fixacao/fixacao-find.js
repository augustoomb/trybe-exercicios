//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (num) => {
  return num % 3 === 0 && num % 5 == 0;
}

const primeiroNumEncontrado = numbers.find(findDivisibleBy3And5);

console.log(primeiroNumEncontrado);



//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

/*const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  return nome.length === 5;
}

const primeiroNomeEncontrado = names.find(findNameWithFiveLetters);

console.log(primeiroNomeEncontrado);*/


//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(musica) {
    return musica.id === '31031685';
  }
  
const musicaComId31031685 = musicas.find(findMusic);

console.log(musicaComId31031685);