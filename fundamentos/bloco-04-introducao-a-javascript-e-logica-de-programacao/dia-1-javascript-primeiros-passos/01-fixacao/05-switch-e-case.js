/* Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo,
que pode ser: 'aprovada' , 'lista' ou 'reprovada' ; */
var statusCandidato = "reprovada";

/* Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens 
do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista'
 ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' . */
switch(statusCandidato){
    case "aprovada":
        console.log("Candidato aprovado")
        break

    case "lista":
        console.log("Candidato na lista")
        break

    case "reprovada":
        console.log("Candidato reprovado")
        break

    default:
        console.log("Status não encontrado")
}
