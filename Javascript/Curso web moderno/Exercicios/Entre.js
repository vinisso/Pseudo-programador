function between(min, max, numero, inclusivo = false){
    if (inclusivo) console.log(numero >= min && numero <= max)
    else
        console.log(numero > min && numero < max)

}

between(10, 100, 50) // retornará true
between(16, 100, 160) // retornará false
between(3, 150, 3) // retornará false
between(3, 150, 3, true) // retornará true