// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // Ele tentará somar o 2 com o undefined. Dando como resultado NaN(Not a Number)
imprimirSoma(1,20,3,4,5,6,7,8,9) // JS irá ignorar os outros parâmetros cujo não foram referenciados anteriormente.
imprimirSoma()

// Função com retorno

function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())