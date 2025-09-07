//prime number-A prime number is a natural number greater than 1 that can be divided only by 1 and  itself
//ex:2,3,5,7,11,13,17,19
function isPrime(num){
    if(num <=1) return false;  //number less than or equal to 1 are not prime
    if(num == 2) return true;  //2 is prime
    if(num % 2===0) return false  //even number >2 are are not prime
    for(let i=3;i<=Math.sqrt(num);i +=2){   //check divisibility from 3 to sqrt(num)
        if(num % i===0) return false;
    }
    return true

}
console.log(isPrime(3))//true
console.log(isPrime(7)) //true
console.log(isPrime(15)) //false
console.log(isPrime(29)) //true