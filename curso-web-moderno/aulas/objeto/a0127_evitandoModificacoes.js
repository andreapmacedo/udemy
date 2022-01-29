// Object.preventExtensions

const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promocão'
})
// isExtensible - não pode adicionar novos atributos, apenas excluir
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// seal - não pode adicionar nem excluir
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze = selado + valores constantes

