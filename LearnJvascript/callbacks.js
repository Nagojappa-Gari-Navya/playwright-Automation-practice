//synchronous
// console.log("navya")
// console.log("santhu")
// console.log("radha")
// asynchronous by using call backs and promices
//anonymous function-function without name
// console.log("navya")
// setTimeout (()=>console.log("santhu"),300)
// console.log("radha")
// function displayname(){  

//     console.log("raju")
// }

// function displaygreeting(callback){
//     console.log("hey hii")
//     callback()
// }
// displaygreeting(displayname)


// function add(n1,n2){
//     console.log(n1+n2)
// }
// function sub(n1,n2){
//     console.log(n1-n2)
// }
// function mul(n1,n2){
//     console.log(n1*n2)
// }
// function division(n1,n2){
//     console.log(n1/n2)
// }
// function calculate(callback){
//     let n1=20
//     let n2=50
//     callback(n1,n2)
// }
// calculate(add)
// calculate(mul)
// calculate(division)
// calculate(sub)
//calculate-is a higher order function
//callback function is a function we will send an argument to the another function
// function printname(){
//     console.log("navya")
// }
// function greetings(callback){
//     console.log("hey hii")
//     callback()
// }
// greetings(printname)
//filter
let arr2=[3,4,5,6,7]
let arr3=["yamuna","navya","yamuna","ramya"]
let filteredNames=arr3.filter(name => name =="yamuna" || name=="navya")
console.log(filteredNames)
// let evenNumbers = arr2.filter (number => number % 2 === 0);
// console.log(evenNumbers)
//map
arr2=[3,4,2,4,5]
doubled=arr2.map(function(number){
    return number /2
}) 
console.log(doubled)
//reduce
let numbers=[2,3,5,3,4]
let sum=numbers.reduce((accumulator,number) =>accumulator+number,0)
console.log(sum)


