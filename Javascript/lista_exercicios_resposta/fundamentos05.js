function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

let a = 'arroz'
console.log(a.toFixed(2))