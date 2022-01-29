/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/
//repetir("código", 2) // retornará ["código", "código"]
//repetir(7, 3) // retornará [7, 7, 7]







function repetir(item, vezes){
    let resultado = []
    for(i = 0; i < vezes; i++)
    {
        resultado.push(item)
    } 


    return resultado
}

function repetir2(item, quantidade) {
    return Array(quantidade).fill(item)
    }




console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) // retornará [7, 7, 7]

console.log(repetir2("código", 2)) // retornará ["código", "código"]
console.log(repetir2(7, 3)) // retornará [7, 7, 7]