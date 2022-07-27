function calcularNumeros(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(param1) || isNaN(param2) || isNaN(param3)) {
      reject(new Error("Informe apenas números"))
    }

    const result = (param1 + param2) * param3;

    if (result < 50) {
      reject(new Error("Valor muito baixo"));
    }

    resolve(result);
  });

  return promise;
}

gerarNum = () => {
  return Math.floor(Math.random() * 100 + 1);
}

async function calcularNumeros() {
  try {
    const resul = await calcularNumeros(gerarNum(), gerarNum(), gerarNum());
    console.log(`O resultado é: ${resul}`)
  } catch (err) {
    console.log(`Erro! ${err.message}`)
  }
}


// calcularNumeros(gerarNum(), gerarNum(), gerarNum())
//   .then((resul) => console.log(`O resultado é: ${resul}`))
//   .catch((err) => console.log(`Erro! ${err.message}`));

