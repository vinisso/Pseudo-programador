var delta = (a, b, c) => {
    delta = b ** 2 - (4 * a * c)
    console.log('Seu delta é:', delta)
    if (delta < 0){
        console.log('NÃO TEM RAIZES REAIS!')
    }
    else if (delta == 0) {
        let x1 = -b + Math.sqrt(delta) / (2 * a)
        console.log('Sua raiz é: ', x1)  
    }
    else if (delta > 0) {
        x1 = -b + Math.sqrt(delta) / (2 * a)
        let x2 = -b - Math.sqrt(delta) / (2 * a)
        console.log('Suas raizes são:', x1.toFixed(2) + ',', x2.toFixed(2))
    }
}

delta(3, 8, 5)