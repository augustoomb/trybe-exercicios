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
  
  // Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais

  /*OBS: MINHA LÓGICA PARA ESSA QUESTAO:
    -QUEBRAR A STRING COM O NOME DO LIVRO EM UM ARRAY DE LETRAS. ISSO INCLUI CADA ESPAÇO E PONTO. LEVANDO EM CONTA QUE NÃO PODE TER TEXTO ENTRE AS INICIAIS E ELAS
      ESTÃO NO INICIO DA STRING, LOGO SEI EXATAMENTE EM QUE POSIÇÃO DO ARRAY OS PONTOS ESTÃO. LOGO, VOU CHECAR SE HÁ PONTO NAS SEGUINTES POSIÇOES DO ARRAY: 1, 4, 7 

        [
        'J', '.', ' ', 'R',
        '.', ' ', 'R', '.',
        ' ', 'T', 'o', 'l',
        'k', 'i', 'e', 'n'
      ]
  */


  const buscarLivroQueComecaCom3iniciais = (book) => book.author.name.split('')[1] === '.' && book.author.name.split('')[4] === '.' && book.author.name.split('')[7] === '.';

  const livroQueComecaCom3iniciais = books.filter(buscarLivroQueComecaCom3iniciais);

  const NomeDoLivroQueComecaCom3iniciais = livroQueComecaCom3iniciais[0].name;  //posição 0 pois é o unico. O enunciado já diz "o livro". Não diz "os livros". Por isso não usei HOFs para iterar

  console.log(NomeDoLivroQueComecaCom3iniciais);