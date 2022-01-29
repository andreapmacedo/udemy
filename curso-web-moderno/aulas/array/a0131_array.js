console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

// Adicionar novo elemento 
aprovados.push('Abia')

console.log(aprovados.length)

aprovados[9] = 'Rafael'

console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)

//Ordenar
aprovados.sort()
console.log(aprovados)

delete aprovados[1]


console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']


aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')

console.log(aprovados)