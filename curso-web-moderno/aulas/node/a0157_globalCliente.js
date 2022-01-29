require('./a0157_global')

console.log(MinhaApp.saudacao())
console.log(global.MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)

MinhaAppFreeze.nome = 'Eita!'
console.log(MinhaAppFreeze.nome)