













function simboloMais(quantidade){
    let resultado = ""
    for(i = 0; i < quantidade; i++)
    {
        resultado += "+"
    } 
    return resultado
}


function simboloMais1(quantidade) {
    return Array(quantidade).fill('+').join('')
}

function simboloMais2(quantidade) {
    return "+".repeat(quantidade)
}


console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++"

console.log(simboloMais1(2)) // retornará "++"
console.log(simboloMais1(4)) // retornará "++++"

console.log(simboloMais2(2)) // retornará "++"
console.log(simboloMais2(4)) // retornará "++++"