

function maiorOuIgual(primeiro, segundo){
    
    if(primeiro >= segundo && (typeof primeiro === 'number') && (typeof segundo === 'number')) 
        return true
    else
        return false
}


console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,"0"))
console.log(maiorOuIgual(5,1))