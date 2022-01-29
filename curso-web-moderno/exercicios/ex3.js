

function salario (horasTrabalhadas, salarioPorHora){
    let pagamento
    pagamento = (horasTrabalhadas * salarioPorHora)
    pagamento = pagamento - (pagamento*0.3)
    return pagamento
}


console.log(salario(180, 60))



function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
}


calcularSalarioLiquido(180, 60)    