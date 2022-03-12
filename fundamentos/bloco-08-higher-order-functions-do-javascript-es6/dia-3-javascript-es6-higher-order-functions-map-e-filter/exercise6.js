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
  
  // Crie um array com o nome de todos os livros com mais de 60 anos de publicação.


  //SOLUÇÃO MAIS SIMPLES, SEM FUNÇÃO PARA ENGLOBAR TUDO:

  const anoAtual = new Date().getFullYear();//pega o ano atual. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear


  const filtrarLivrosComMaisDe60Anos = (book) => (anoAtual - book.releaseYear) > 60;

  const convertObjLivroEmNomeDeLivro = (book) => book.name;


  const arrLivrosComMaisDe60Anos = books.filter(filtrarLivrosComMaisDe60Anos);

  const  arrNomesDeLivrosComMaisDe60Anos = arrLivrosComMaisDe60Anos.map(convertObjLivroEmNomeDeLivro);

  console.log(arrNomesDeLivrosComMaisDe60Anos);



  //*************** */


  //SOLUÇÃO MAIS ELABORADA, COM FUNÇÃO ENGLOBANDO O CÓDIGO:

  /*const montarArrComLivrosDeMaisDe60Anos = (arrLivros, anoAtual) => {

    const filtrarLivrosComMaisDe60Anos = (book) => (anoAtual - book.releaseYear) > 60;

    const convertObjLivroEmNomeDeLivro = (book) => book.name;


    const arrLivrosComMaisDe60Anos = arrLivros.filter(filtrarLivrosComMaisDe60Anos);

    return arrLivrosComMaisDe60Anos.map(convertObjLivroEmNomeDeLivro);

  }



  const anoAtual = new Date().getFullYear();
  console.log(montarArrComLivrosDeMaisDe60Anos(books, anoAtual))*/