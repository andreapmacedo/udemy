

function receberNomeDoMes(mes){
    switch (mes){
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 1:
            return "março";
        case 1:
            return "abril";
        case 1:
            return "maio";
        case 1:
            return "junho";
        case 1:
            return "julho";
        case 1:
            return "agosto";
        case 1:
            return "setembro";
        case 1:
            return "outubro";
        case 1:
            return "novembro";
        case 1:
            return "dezembro";
    }
}


function receberNomeDoMes1(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
}


console.log(receberNomeDoMes(1))
console.log(receberNomeDoMes1(1))


