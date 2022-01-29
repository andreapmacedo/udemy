const fabricantes = ["Mecedes", "Audi", "BMW"]


function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}


fabricantes.forEach(imprimir)

fabricantes.forEach(function (fabricante) {
  console.log(fabricante)
})
// utilizando função arrow
fabricantes.forEach(fabricante => console.log(fabricante))