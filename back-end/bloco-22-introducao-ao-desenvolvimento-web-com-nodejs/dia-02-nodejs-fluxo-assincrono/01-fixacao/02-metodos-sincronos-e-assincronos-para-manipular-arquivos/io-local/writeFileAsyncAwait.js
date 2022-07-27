// ESCREVER EM ARQUIVOS: ASSÍNCRONO COM PROMISES - com async/await

const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()


/*
Note que para podermos utilizar o async/await, precisamos criar uma função main
e colocar nossa lógica dentro dela. Isso acontece porque,
por enquanto, o await só pode ser utilizado dentro de funções async.

Perceba também que não temos mais nenhum .then e que todo o tratamento de erro
e sucesso foi feito com um try ... catch.
Do mesmo modo que fizemos quando estávamos utilizando o fs.readFileSync.
*/