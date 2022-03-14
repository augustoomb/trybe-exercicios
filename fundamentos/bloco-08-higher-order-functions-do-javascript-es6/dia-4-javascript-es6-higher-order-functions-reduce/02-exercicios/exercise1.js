// Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
  
function flatten(arrs) {
  
  const converterEmArraySimples = (acum, atual) => acum.concat(atual); //concateno o array que já existe com o array da iteração atual.

  return arrs.reduce(converterEmArraySimples);
}

console.log(flatten(arrays));

