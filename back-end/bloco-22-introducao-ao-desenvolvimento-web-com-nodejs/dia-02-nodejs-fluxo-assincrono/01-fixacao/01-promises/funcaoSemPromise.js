// RESOLVENDO O PROBLEMA SEM PROMISE, DE FORMA SÍNCRONA

function calcularDivisao(num1, num2) {
  if (num2 === 0) throw Error("Não é permitido divisão por 0");

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 1);
  console.log("resultado: %s", resultado);
} catch (e) {
  console.log("erro %s", e.message);
}