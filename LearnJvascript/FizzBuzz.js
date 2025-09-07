// print numbers from 1-100
// -if a number is divisable by 3 print Fizz
// - if a number is divisable by 5 print Buzz
// - if a number is divisable by both 3 and 5 FizzBuzz
for(let i=1;i<=100;i++){
    if(i%3== 0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
