function mu(num, m){
    return num + mu( num, m-1 )
}

console.log(mu(5, 4))