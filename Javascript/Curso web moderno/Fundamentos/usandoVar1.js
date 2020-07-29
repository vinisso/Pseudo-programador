{ 
    { 
        { 
            
            { 
                var sera = 'sera???' 
            }
        }
    }
}

console.log(sera) // o escopo é até onde a sua variável é visivel
function teste() {
    var local = 123
}
teste()
console.log(local)