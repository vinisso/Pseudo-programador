function estaEntre(min, max, numero, inclusivo = false){

    if (inclusivo) return numero >= min && numero <= max
    return numero > min && numero < max
}

console.log(estaEntre(10, 100, 50)) // retornará true
console.log(estaEntre(16, 100, 160))// retornará false
console.log(estaEntre(3, 150, 3))// retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true