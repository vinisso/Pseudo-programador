let num1 = 1
let num2 = 2
num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
//Aqui deu true porque a comparação foi feita antes do 'num2' sofrer a redução
console.log(num1 === num2)