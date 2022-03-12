const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.


  //RESOLUÇÃO SIMPLES PARA MELHOR ENTENDIMENTO (SEM ENGLOBAR TUDO EM FUNÇÃO)

  const filtrarLivrosDeFiccaoEFantasia = (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia';

  const pegarNomeAutores = (book) => book.author.name;

  const sortArr = (a,b) => { //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }    
    return 0;    
  } 



  const arrBooksFiccaoEFantasia = books.filter(filtrarLivrosDeFiccaoEFantasia);

  const arrNomesAutores = arrBooksFiccaoEFantasia.map(pegarNomeAutores);

  const arrNomesAutoresOrdenado = arrNomesAutores.sort(sortArr);

  console.log(arrNomesAutoresOrdenado);




  //---------------------------------

  //RESOLUÇÃO MAIS ELABORADA (ÚNICA DIFERENÇA É QUE TUDO ESTÁ ENGLOBADO NUMA FUNÇÃO. É A FORMA MAIS CORRETA):

  /*const filtrarNomes = (arrBooks) => {

    const filtrarLivrosDeFiccaoEFantasia = (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia';

    const pegarNomeAutores = (book) => book.author.name;

    const sortArr = (a,b) => {
      if (a > b) {
          return 1;
      }
      if (a < b) {
          return -1;
      }    
      return 0;    
    } 



    const arrBooksFiccaoEFantasia = arrBooks.filter(filtrarLivrosDeFiccaoEFantasia);

    const arrNomesAutores = arrBooksFiccaoEFantasia.map(pegarNomeAutores);

    return arrNomesAutores.sort(sortArr);

  }

  console.log(filtrarNomes(books));*/