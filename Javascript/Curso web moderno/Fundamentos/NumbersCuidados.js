console.log(7 / 0) // Js retornará 'infinity'

console.log('10' / 2) 
/* Sua tipigem extremamente fraca faz com que ele reconheça o conteúdo dentro
de um dado e possa o converte-lo em outro, como visto acima.
*/

console.log('3'+ 2)
/* Aqui ele não realiza a soma, pois a string tem a proridade. Assim, ele
ira concatenar, retornando '32' por conta do operador aritmético '+' ter sentido
na concatenação. Caso fosse um "-" no lugar do "+", seria feito a subtração pela
falta de sentido na concatenação.  
*/
console.log('3' - 2)

console.log('show' * 2)
/* Aqui o Js não é como o python, que iria imprimir a string 'show' duas vezes.
Assim ficando: 'showshow'. Ele só reconhece como 'NaN' - (Not a Number)
*/

console.log(0.1 + 0.7)

//console.log(10.toString())

console.log((10.345).toFixed(2)) //Usar paranteses no dado não literal. Ex: (10.345)

/* Aqui o toString não funcionou pelo 10 não estar declarado como Number.
*/
//Exemplo:

const Arroz = Number('10.345')
console.log(Number.isInteger(Arroz))

console.log(Arroz.toString())
