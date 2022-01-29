


function filtrarNumeros(array){
    let resultado = []
   
    for(let item of array)
        if(typeof item === "number")
        resultado.push(item)
        
        return resultado
}

function filtrarNumeros2(array) {
    return array.filter(item => typeof item === "number")
    }






console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros2(["a", "c"])) // retornará []