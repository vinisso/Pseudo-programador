// SEMPRE QUE SE ESQUECER DE COMO FUNCIONA UM INDICE, VEJA ESSE EXEMPLO:

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);
}

/* O [i] SERVE PARA ITERAR CADA NOME/ELEMENTO POR VEZ, SEM ELE, SE VOCÊ COLOCASSE SÓ: console.log(nomes) 
IA PRINTAR A ARRAY TODO DIVERSAS VEZES AO INVÉS DE UM NOME EM CADA LINHA. */

//EX:

/*

===================================================================================================================================


const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);

OUTPUT:

[for] Whinds
[for] Freeway
[for] Teste
[for] Maria

===================================================================================================================================

*/

// AGORA SEM O [i]:

/*

===================================================================================================================================


const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes);

OUTPUT:

[for] [ 'Whinds', 'Freeway', 'Teste', 'Maria' ]
[for] [ 'Whinds', 'Freeway', 'Teste', 'Maria' ]
[for] [ 'Whinds', 'Freeway', 'Teste', 'Maria' ]
[for] [ 'Whinds', 'Freeway', 'Teste', 'Maria' ]

===================================================================================================================================

*/

