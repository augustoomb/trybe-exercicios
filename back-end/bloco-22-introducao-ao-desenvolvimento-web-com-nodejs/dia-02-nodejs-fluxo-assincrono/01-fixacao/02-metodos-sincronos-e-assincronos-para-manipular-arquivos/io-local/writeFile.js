// ESCREVER EM ARQUIVOS: ASSÍNCRONO COM PROMISES - com then/catch

/*
Observação: O módulo fs também disponibiliza um método writeFile,
que funciona utilizando callbacks.
Vamos utilizar diretamente o módulo ('fs').promises,
já que o uso de Promises é bem mais encorajado que o uso de callbacks 
*/

const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });


  // Rode o script com node writeFile.js.
  // Repare que o conteúdo do meu-arquivo.txt foi alterado para "Meu textão".