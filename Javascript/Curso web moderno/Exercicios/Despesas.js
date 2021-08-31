// Resolução 1 

console.log("\n\n RESOLUÇÃO 1 \n\n")

function despesas(arr){
    total = 0

    for (let item of arr){
        total += item.preco
    }
    return total
}

console.log(despesas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ])) 


// Resolução 2 

function despesas2(arr){
    
    return arr
    .map(item => item.preco)
    .reduce( (acumulador, numeroAtual) => acumulador + numeroAtual)
}

console.log("\n\n RESOLUÇÃO 2 \n\n")

console.log(despesas2([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 2500.00},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 32000.90}
    ])) 

// Resolução 3

function despesas3(arr){
    return arr.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual.preco, 0)
}

console.log("\n\n RESOLUÇÃO 3 \n\n")

console.log(despesas3([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ])) 
