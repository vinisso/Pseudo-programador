// Resolução 1 

console.log("\n\n RESOLUÇÃO 1 \n\n")
function desoma(nums){
    const qntnums = nums.length

return (qntnums === 0) ? 0 : nums[0] + desoma(nums.slice(1))
}

console.log(desoma([1,2,3,4,5,6]))

// Resolução 2

function desoma2(nums){
    let total = 0

    nums.forEach(numero => total += numero)
    return total
}

console.log("\n\n RESOLUÇÃO 2 \n\n")

console.log(desoma2([1,2,3,4,5,6]))

// Resolução 3

function desoma3(nums){
    const soma = nums.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}

console.log("\n\n RESOLUÇÃO 3 \n\n")

console.log(desoma3([1,2,3,4,5,6]))