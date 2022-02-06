/* 
Acesse as chaves name , lastName e age do ex1 e concatene as suas informações para imprimir
 no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
*/


let atleta = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log("A jogadora " + atleta.name + " " + atleta.lastName + " " + "tem " + atleta.age + " de idade.")


//ou


console.log("A jogadora " + atleta['name'] + " " + atleta['lastName'] + " " + "tem " + atleta['age'] + " de idade.")