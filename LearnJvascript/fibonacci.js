function fibonacci(n){
    let fib=[0,1]   //start with first two numbers
    for(let i=2;i<n;i++){   //generate the series up to n terms
        fib[i]=fib[i-1]+fib[i-2] //sum of previous two
    }
    return result 
}
console.log(fibonacci(10))