function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('notebook', 2599.99))
console.log(criarProduto('ipad', 1299.99))

