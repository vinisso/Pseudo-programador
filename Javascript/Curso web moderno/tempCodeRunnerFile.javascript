function multiply(numero, m){
    return numero + multiply(numero, m-1)
}

console.log(multiply(5, 4))