// LER ARQUIVOS: ASSÍNCRONO COM CALLBACK

const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

/*
Observação: A callback é uma função que recebe dois parâmetros: err e data.
Caso ocorra um erro durante a leitura do arquivo,
o parâmetro err virá preenchido com as informações referentes ao erro.
Quando esse parâmetro vier vazio, significa que a leitura do conteúdo do arquivo
ocorreu sem problemas. Nesse caso, o segundo parâmetro, data, virá preenchido
com o conteúdo do arquivo.
*/