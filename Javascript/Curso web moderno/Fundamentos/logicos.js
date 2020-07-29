function compras(trabalho, trabalho2) {
    const comprarSorvete = trabalho || trabalho2 //operador lógico do tipo 'ou'
    const comprarTv50 = trabalho && trabalho2 //operador lógico do tipo 'e'
    //const comprarTv32 = trabalho !!(trabalho ^ trabalho2)//operador bitwise xor 'ou'exclusivo opera de bit a bit
    const comprarTv32 = trabalho != trabalho2 //o 'ou' exclusivo pode ser substituido pelo 'diferente'
    const manterSaudavel = !comprarSorvete //operador unário
    
    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    /*Por ser um bloco, foi estudado antes que ele trabalha com chave:valor.
logo parece um erro não atribuir nenhum valor às declarações acimal certo?
Não, nas novas versões do ECMAscript eles deixaram isso mais dinâmico. Agora o JS faz isso:
{comprarSorvete: comprarSorvete
comprarTv50: comprarTv50
comprarTv32: comprarTv32
manterSaudavel: manterSaudavel}
mantendo o conceito de bloco, porém de forma implícita.
*/
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))