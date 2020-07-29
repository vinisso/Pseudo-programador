const escola = 'cod3r'

console.log(escola)
console.log(escola.charAt(4)) 
/*o método 'charAt()' procura na sua string qual caractére está no indice informado
pelo usuário. Como vist acima.
*/

console.log(escola.charAt(5))
/* Javascript não costuma jogar tantas mensagens de erro na sua tela.
Como aqui visto, em qualquer outra linguagem seria dado uma mensagem de erro
pelo programa não ter encontrado o indice. Aqui o Js somente retornou o vazio.
*/

console.log(escola.charCodeAt(3))
// 'charCodeAt' busca o valor de indice dentro da tabela ASCII. 

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))
// é como dizer: "Vá do indice 0 e me dê 3 caractéres".
console.log('Escola '.concat(escola).concat('!'))
// Ou
console.log('Escola ' + escola + '!')
// Literal é um valor direto que você usa, sem antes ser atribuído a nada.

console.log(escola.replace(3, 'e'))
// Ou usamos expressão regular, Ex:
console.log(escola.replace(/\d/, 'e'))
/* '/\d/' Aqui estamos dizendo para substituir todos os dígitos da string pela letra
'e', logo a diretita dada pelo usuário.
*/
console.log(escola.replace(/\w/g, 'e'))
/* /\w/ Significa substituir todas as letras e dígitos pela letra ou número
a direita, que no caso é a letra 'e'
a letra 'g', (uma flag) logo depois do '/\w/' significa 'global', ou seja, vai substituir TUDO.
Caso não declarada, substituira apenas o primeiro indice.
*/

// replace faz o mesmo que o python, simplesmente substitui um caractere por outro.

console.log("Ana,Maria,João".split(','))
//ou usando o regex (expressões regulares).
console.log("Ana,Maria,João".split(/,/))
/* '.split' serve para colocar o conteúdo na string em arrays. Você define pelo
que ele ira separ. No exemplo acima usamos a virgula.
*/