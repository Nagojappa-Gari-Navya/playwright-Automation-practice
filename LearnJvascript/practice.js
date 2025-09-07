// function stringreverse(str){            //reverse string
//     let reverse="";
//     for(let i=str.length-1;i>=0;i--){
//         reverse +=str[i]


//     }
//     return reverse;
// }
//     console.log(stringreverse("hello"))
// let arr=[1,9,8,830,935]                      //reverse array
// let reverse=[];
// for(let i=arr.length-1;i>=0;i-- ){
//     reverse.push(arr[i]);
// }
// console.log(reverse)
// let str1="mnvdfghjdj"
// str2=str1.split("")
// console.log(str2.reverse())
// function reversechars(char){
//     let reversed=""
//     for(let i=char.length-1;i>=0;i--){
//         reversed+=char[i]


//     }
//     return reversed
// }
// console.log(reversechars("money"))
// let arr=[5,4,"fgb",8,44]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)
// function secondHighest(arr){                  //find secondhighest number
//     let first=-Infinity, second=-Infinity
//     for(let num of arr){
//         if(num>first){
//             second=first
//             first=num
//         }
//         else if(num>second && num<first){
//             second=num

//         }
//     }
//         return second === Infinity ? first:second
//     }
// // console.log(secondHighest([2,55,7,98,45,204,205]));
// console.log(secondHighest([2,2,2]));

// function secondHighest(arr){
//     let first=-Infinity,second= -Infinity
//     for(let num1 of arr){
//         if(num1>first){
//             second=first
//             first=num1
//         }
//         else if(num1>second && num1<first){
//             second=num1

//         }

//     }
//     return second=== -Infinity?first:second

// }
//  console.log(secondHighest([2,4,66,78,83]))
// let arr=[3,2,4,2,1,9,4,3,2,9]//remove the duplicates
// let uniqueArr=[...new Set(arr)]
// console.log(uniqueArr)
// function reverseString(str){
//     let reversed=""
//     for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i]
//     }
//     return reversed
// }
// console.log(reverseString("meenakshichowdary"))
// let arr=[2,4,5,7,88,56,34,23]
// let reversed=[]
// for(let i=arr.length-1;i>=0;i--){
//     reversed.push(arr[i])
// }
// console.log(reversed)
// function reverseString(str){
//      let reverse=""
//     for(let i=str.length-1;i>=0;i--){
//         reverse+=str[i]

//     }
//     return reverse
// }
// console.log(reverseString("i want job please god"))
// let arr=[3,45,78,90,46,38]
// let reversed=[]
// for(let i=arr.length-1;i>=0;i--){
//     reversed.push(arr[i])

// }
// console.log(reversed)
// function secondHighest(arr){
//     let first=-Infinity,second=-Infinity
//     for(let num of arr){
//         if(num>first){
//             second=first
//             first=num
//         }
//         else if(num>second && num<first){
//             second=num
//         }

//     }
//     return second==-Infinity?null:second
// }
// console.log(secondHighest([7,3,4,6,8,33,78]))
// let arr=[3,5,7,3,5,7,8,7,8,9]
// let uniqueArr=[...new Set(arr)]
// console.log(uniqueArr)
// s="tomorrow"
// s1=s.replace("o","$")
// console.log(s1)
// ID:15, Name;Steven, Age;30,country;Canada
// ID:25, Name;John, Age;33,country;USA
// ID:40, Name;Steven, Age;25,country;UK
// console.log(sID==15)
// function reverseString(str){
//       let reversed=""
//     for(let i=str.length-1;i>=0;i--){

//         reversed+=str[i]
//     }
//     return reversed
// }
// console.log(reverseString("mounikanv"))
// let arr=[3,5,6,8,4,5,9,0]
// let reversed=[]
// for(let i=arr.length-1;i>=0;i--){
//     reversed.push(arr[i])

// }
// console.log(reversed)
// function secondHighest(arr){
//     let first=-Infinity,second=-Infinity
//     for(let num of arr){
//         if(num>first){
//             second=first
//             first=num
//         }
//         else if(num>second && num<first){
//             second=num
//         }
//     }
//     return second===Infinity?null:second
// }
// console.log(secondHighest([2,66,78,45,345]))
// let arr=[2,4,5,5,4,3,2,1,5]
// let uniqueArr=[...new Set(arr)]
// console.log(uniqueArr)
// function isPalindrome(str){
//     var a=str.split("").reverse().join("")
//     if(str==a){
//         console.log("given string is palindrome")
//     }
//     else{
//         console.log("given string is not palindrome")
//     }
// }
// // isPalindrome("madam")
// function isevenorOdd(number){
//     if(number%2==0){
//         return "even";
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(isevenorOdd(37))
// let a=10,b=20
// b=b-a
// a=a+b
// console.log(a,b)
// function fib(n){
//     let[a,b]=[0,1],res=[];
//     for(let i=1;i<n;i++){
//         res.push(a)
//         [a,b]=[b,a+b]

//     }
//     return res;
// }
// console.log(fib(7))
// function fact(n){
//     result=1;
//     for(let i=1;i<=n;i++){
//         result *=i
//     }
//     return result
// }
// console.log(fact(8))
//  function isPrime(num){
//     if(num <=1) return false;
//     if(num==2) return true;
//     if(num %2===0) return false;
//     for(let i=3;i<=Math.sqrt(num);i+=2){
//         if(num %i===0)
//             return false;

//         }

//             return true

//     }

// console.log(isPrime(9))
// function isprime(num){
//     if(num <=1)return false;
//     if(num==2)return true;
//     if(num% 2===0)return false;
//     for(let i=3;i<=Math.sqrt;i+=2){
//         if(num %i===0)return false
//     }
//     return true
// }
// console.log(isprime(13))
// function isFibonacci(n){
//     fib=[0,1]
//     for(let i=2;i<=n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(isFibonacci(5))
// function isFactorial(n){
//     let result=1
//     for(let i=1;i<=n;i++){
//         result *=i
//     }
//     return result
// }
// console.log(isFactorial(3))
// let a=10,b=20
// b=b-a
// a=a+b
// console.log(a,b)
// function isSwap(a,b){

//        let num=a
//         a=b
//         b=num
//         console.log("a="+a+",b="+b)

// }
// isSwap(10,20)
// function reverseString(str){
//     let reversed=""
//     for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i]
//     }
//     return reversed
// }
// console.log(reverseString("navya"))
// str="navya"
// str2=str.split("").reverse().join("")
// console.log(str2)
// let arr=[2,3,4,55,67,899]
//     let reversed=[]
//     for(let i=arr.length-1;i>=0;i--){
//         reversed.push(arr[i])
//     }

// console.log(reversed)
// function isAnagram(a,b){
//     str1=a.toLowerCase().split("").sort().join("")
//     str2=b.toLowerCase().split("").sort().join("")
//     if(str1==str2){
//         return "true"

//     }
//     return "false"

// }
// console.log(isAnagram("listen","silent"))
// function isEvenOrOdd(number){
//     if(number%2==0){
//         return "true"
//     }
//     else{
//         return "false"
//     }
// }
// console.log(isEvenOrOdd(23))
// function isPalindrome(str){
//     let a=str.split("").reverse().join("")
//     if(str==a){
//         console.log("given string is palindrome")
//     }
//     else{
//         console.log("given string is not palindrome")

//     }
// }
// isPalindrome("madam")

// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
// }
//     else if (i % 3 == 0) {
//     console.log("Fizz")
// }
// else if (i % 5 == 0) {
//     console.log("Buzz")
// }
// else {
//     console.log(i)
// }
// }
// let arr=[2,3,4,5,6,7,5,6,3,4]
// let uniqueArr=[...new Set(arr)]
// console.log(uniqueArr)
// function findlargestNumber(arr){
//     return Math.max(...arr)
// }
// console.log(findlargestNumber([2,3,4,55,67,34]))
// console.log(Math.max(2,3,4,55,67,34))
// function CharCounting(str){
//     let charCount={}
//     for(let char of str){
//         charCount[char]=(charCount[char]||0)+1
//     }
//     return charCount
// }
// console.log(CharCounting("mayabajar"))
// class students{
//     studentdetails(name,place,course){
//         this.studentname=name
//         this.studentplace=place
//         this.studentcourse=course
//     }
//     displaystudentdetails(){
//         console.log(this.studentname,this.studentplace,this.studentcourse)
//     }
// }
// const stu1=new students()
// stu1.studentdetails("navya","bangalor","playwright")
// stu1.displaystudentdetails()
class A{
    display(){
        console.log("this method is from parent")
    }
    add(num1,num2){
        console.log(num1)
        console.log(num2)
        console.log(num1+num2)
    }

}
class B extends A{
    display(){
        console.log("this method from child")

    }
     add(num1,num2,num3){
        console.log(num1)
        console.log(num2)
        console.log(num3)
        console.log(num1+num2+num3)
    }
}
const obj=new A()
obj.display()
obj.add(1,2,4)

