/*

A função techList recebe como parâmetros um array contendo uma lista de tecnologias
e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética,
um objeto com a seguinte estrutura:

{
  tech: 'nomeTecnologia',
  name: name,
}
*/

function techList(arrTech, nome) {
  let arrRetorno = [];

  for(let i=0; i<arrTech.length; i+=1) {
    arrRetorno.push({
      tech: arrTech[i],
      name: nome
    })
  }

  if(arrRetorno == "") {
    return "Vazio!";
  }else{
    return arrRetorno.sort(function (a,b){
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });
  }
}

module.exports = techList;
