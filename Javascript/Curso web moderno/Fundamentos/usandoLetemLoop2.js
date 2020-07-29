const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

/*pelo fato de let ter o escopo de bloco, ele consegue iterar sobre o for e fornecer
seus valores "ao vivo" para o console. Diferente do var.
*/