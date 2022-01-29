/*
Criar uma função que receba um array de números e retorne o menor número desse array.
*/



function menorNumero(numeros){
    let menor = numeros[0]
    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]
    return menor
}


function menorNumero1(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero2(numeros) {
    return Math.min(...numeros);
}


console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15

console.log(menorNumero1([10, 5, 35, 65])) // retornará 5
console.log(menorNumero1([5, -15, 50, 3])) // retornará -15

console.log(menorNumero2([10, 5, 35, 65])) // retornará 5
console.log(menorNumero2([5, -15, 50, 3])) // retornará -15