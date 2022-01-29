const pessoa = {
  sadacao: 'Bom dia!',
  falar() {
    console.log(this.sadacao)
    // console.log(sadacao) // falha
  }

}


pessoa.falar()  // <Bom dia!>


const falar = pessoa.falar
falar() // conflito entre os paradigmas: funcional e oo // <undefined>


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // <Bom dia!>