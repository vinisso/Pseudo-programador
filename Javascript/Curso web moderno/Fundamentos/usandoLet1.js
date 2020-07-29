let numero = 1 
{
    let numero = 2
    console.log('Dentro =', numero)
/*O let respeita o escopo em que ele existe. Pois o mesmo foi criado com 1 escopo
a mais do que o var, que é o escopo de bloco.
*/

}
console.log('Fora=', numero)
