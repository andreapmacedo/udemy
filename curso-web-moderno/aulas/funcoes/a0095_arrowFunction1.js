let dobro = function (a) {
  return 2 * a
}

let dobroArrow = (a) => {
  return 2 * a
}

// reduzida (retorno implícito)
dobroArrow = a => 2 * a

console.log(dobro(2))
console.log(dobroArrow(2))


let ola = function () {
  return "Olá"
}


let olaArrow = () => "olá"
olaArrow = _ => "Olá"


console.log(ola())
console.log(olaArrow())