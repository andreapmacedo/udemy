
/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
*/





function somarNumeros(array){
    let resultado = 0
    for (let i = 0; i < array.lenght; i++){
        resultado += array[i]
        console.log(array[i])

    }
    return resultado
}

function somarNumeros1(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

function somarNumeros2(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

    function somarNumeros3(numeros) {
        const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
        return soma
}





console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros1([10, 10, 10])) // retornará 30
console.log(somarNumeros2([10, 10, 10])) // retornará 30
console.log(somarNumeros3([10, 10, 10])) // retornará 30



console.log(somarNumeros([15, 15, 15, 15])) // retornará 60
console.log(somarNumeros1([15, 15, 15, 15])) // retornará 60
console.log(somarNumeros2([15, 15, 15, 15])) // retornará 60
console.log(somarNumeros3([15, 15, 15, 15])) // retornará 60
