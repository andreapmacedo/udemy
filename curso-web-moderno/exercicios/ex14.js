


function objetoParaArray(objeto) {
    const resultado = []

    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    
    return resultado
}


function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
    return resultado
}

function objetoParaArray3(objeto) {
        return Object.entries(objeto)
}


let a = objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

console.log(a)

a = objetoParaArray({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]


console.log(a)