// EXERCICIO 2

function verificarNumero(num) {
  if (isNaN(num)) {
    return "o valor deve ser um número";
  }
  if (num > 0) {
    return "positivo";
  }
  if (num < 0) {
    return "negativo";
  }
  return "neutro";
}

module.exports = verificarNumero;