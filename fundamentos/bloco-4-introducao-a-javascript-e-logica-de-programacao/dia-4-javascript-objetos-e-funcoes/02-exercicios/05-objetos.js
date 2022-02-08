/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro
 e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, 
 Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
 Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. */

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "sim"
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: "sim"
};

for(let key in info){

  if(info.recorrente == "sim" && info2.recorrente == "sim"){
    info.recorrente = "Ambos recorrentes"
    info2.recorrente = ""
  }

  console.log(info[key] + info2[key])   

}

