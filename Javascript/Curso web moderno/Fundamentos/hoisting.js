console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)

//O hoisting (içamento) é o programa fazer isso:
/* 
var a
console.log('a =', a)
a = 2
console.log('a=', a)
*/

function teste () {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()
//Mesmo dentro de uma função o var sofre um içamento (hoisting)
