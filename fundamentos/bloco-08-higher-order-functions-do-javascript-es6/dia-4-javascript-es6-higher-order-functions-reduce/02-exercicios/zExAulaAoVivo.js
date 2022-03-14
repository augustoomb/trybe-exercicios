//questão aula ao vivo do Caique:

const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
]

//reduza o array acima em um objeto no formato abaixo:

// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//     ...
// }

const unirItensDoArrayEmUmObj = (acum, valorAtual) => {
    acum[valorAtual.fullName] = valorAtual.email
    return acum;
}

const novoObj = players.reduce(unirItensDoArrayEmUmObj,{});

console.log(novoObj)