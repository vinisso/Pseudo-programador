/* Uma estrututa indexada é uma estrutura que é acessada por números. Por indices.
*/


const valores = [7.7, 8.9, 5.3, 9.2]
console.log(valores[0], valores[3]) // Você pode printar diferentes indices do seu array
console.log(valores[4])

valores[10] = 10
console.log(valores)
//Aqui ele irá preencher os outros 6 itens que faltam como 'itens vazios', até chegar no seu indice
valores[4]= 10
console.log(valores)
console.log(valores.length) //len em python

valores.push({id: 3}, false, null, 'teste') //O que pode entrar em um array
console.log(valores)

console.log(valores.pop()) //Pega o último elemento do array
delete valores[0] // deletará algum valor de seu indice
console.log(valores)
console.log(typeof valores) //array em js é visto pelo programa como object