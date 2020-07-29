//colchetes dentro como o operador para destructuring com arrays
function rand([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Floor arrendonda pra baixo, ceil pra cima

}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand())