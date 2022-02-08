/* 
Acesse a chave medals e faça um console.log no seguinte formato: 
"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
*/

let atleta = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [
        2006, 2007, 2008, 2009, 2010, 2018
    ]
}

console.log("A jogador possui "+atleta.medals.golden+" medalhas de ouro e "+atleta.medals.silver+" medalhas de prata.")