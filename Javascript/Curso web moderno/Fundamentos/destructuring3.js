//chaves dentro dos parâmetros da função para marcar o destructuring
function rand({min = 0, max = 1000})  {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand( { max: 50, min: 40 } ) )
console.log(rand(obj))
console.log(rand({ min: 955 })) // ele esta pegando o máximo declarado logo acima
console.log(rand({}))
/*Se você não colocar o operador do destructuring ('{}') ele ira aplicar um erro.
pois ele estará tentando tirar elementos dentro de algo null ou undefined
*/