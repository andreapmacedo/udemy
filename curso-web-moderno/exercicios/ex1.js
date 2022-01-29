
function cumprimentar(nome) {
    return `Olá, ${nome}!`
    }


function cumprimentar1(nome){
    return "olá, "+nome+"!"     
}

function cumprimentar2(nome){
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")    
}

// Função Arrow
let cumprimentar3 = nome => {
    return "olá, ".concat(nome).concat("!")     
}

// Função Arrow reduzida (retorno implícito)
let cumprimentar4 = nome => "olá, ".concat(nome).concat("!") 


console.log(cumprimentar("Leonardo"))
console.log(cumprimentar("Maria"))

console.log(cumprimentar1("Leonardo"))
console.log(cumprimentar1("Maria"))

console.log(cumprimentar2("Leonardo"))
console.log(cumprimentar2("Maria"))

console.log(cumprimentar3("Leonardo"))
console.log(cumprimentar3("Maria"))

console.log(cumprimentar4("Leonardo"))
console.log(cumprimentar4("Maria"))
