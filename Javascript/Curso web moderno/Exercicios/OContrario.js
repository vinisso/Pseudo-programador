function inverso(fun){
   const tipo = typeof fun
    if (tipo == 'boolean') return !fun
    else if (tipo == 'number') return -fun
    else 
        return 'Esperando booleanos ou números.'
}

console.log(inverso('alo'))
console.log(inverso(false))
console.log(inverso(true))
console.log(inverso(-390))
console.log(inverso(588))