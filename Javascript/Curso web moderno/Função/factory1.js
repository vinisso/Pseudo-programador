const prod1 = {
    nome: '...',
    preco: 45 
}

const prod2 = {
    nome: ',,,',
    preco: 52 
}

//factory simples

function criarPessoa(nome, preco) {
    return {
        produto: `${nome}`,
        valor: `${preco}`
    }
}

console.log(criarPessoa('camisa', 76))

