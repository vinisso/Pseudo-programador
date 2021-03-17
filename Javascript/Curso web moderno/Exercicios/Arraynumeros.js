function receberArray(arr){
    const resultado = []

    for( let item of arr){
        if(typeof item === 'number'){
            resultado.push(item)
        }
    
}
 return resultado
}

console.log(receberArray(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20])

// Outro exemplo 

function returnarray(array){
    return array.filter(item => typeof item === 'number')
}

console.log(returnarray(["a", "c"]))