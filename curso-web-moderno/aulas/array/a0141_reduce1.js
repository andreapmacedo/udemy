const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

// valor mais acumulador
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
})

console.log(resultado)

// com valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 10)

console.log(resultado2)