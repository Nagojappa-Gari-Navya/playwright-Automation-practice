// 1,Arthmetic operator
// +  = Addition
// -  = subtraction
// *   = multiplication
// /   = division
// %   =modulus
//++ =incremental(x=20,x++=21)
// -- =decremental(x=10,x--=9)
//x=10,  y=30
//x="navya" ,y= "n"
//x="star",y="30"
// x="cjm",y=25
//x="navya",y=undefined
//x=navya,y=undefined --not defined
//x=43,y=undefined --NaN
//coarsion in js-one string and one number it combines to form concatination
 //console.log(x+y)

//const { _android } = require("@playwright/test");

// x=20
// y=15

//x="40",y="38"
// x="shgje",y=80  ---NaN -not a number
// x="navya",y=undefined ---NaN -not a number
// console.log(x-y)

// x=20,y=14
 //x=30 ,y="78"
// x="bat",y=89  --NaN
 //console.log(x*y)

// x=10,y=2
// //x=20,"67" ---not defined
// x="vsb",y=39 ---NaN
// console.log(x/y)

// x=23,y=20
// x="sty",y=3 --NaN
// console.log(x%y)


// x=13
// x++ =x+1
// x++ = 23+1
// console.log(x++)


// 2,logical operator
// AND
// x   y    result
// 1   1    1
// 1   0    0
// 0   1    0
// 0   1    0
// console.log((4==="4" && 4>7))

// marks =65
// if(marks >90){
//     console.log("Grade A+")
// }
// else if(marks <=90 && marks >75){
//     console.log("Grade A")
// }

// OR
//   x   y    result
// 0   0    0
// 1   0    1
// 0   1    1
// 0   1    1
// console.log(true || false)

//NOT
// x     y    
// 1     0
// 0     1
// console.log(!(false))
// console.log(!(true))
// console.log(!("4"==4))

// isChecked() =true

// 3,comparision operator
//x=4,y=4
// console.log(4==4)
// console.log(4===4)

// console.log(4==7)-true
// console.log(4===7)-true

//  console.log(4=="navya") -false
//  console.log(4==="navya")-false

// console.log(4=="4")-true
// console.log(4==="4")-false
// == compare only values but not datatypes
// ===compare both value and datatypes


// console.log(5<9)
// console.log(5>9)
// console.log(5<=5)
// console.log(5>=5)

// console.log(5!=9)
// console.log(5!=5)

// 4,Assignment operator
// x=6
// x+=5
// console.log(x)

// x=6
// x-=5
// console.log(x)

// x=6
// x*=5
// console.log(x)

// x=6
// x/=5
// console.log(x)

// x=6
// x%=5
// console.log(x)

// 5,Ternary/condition operator 

// syntax 
// condition ? value1 : value2
// value1 ="navya"
// value2 ="ramya"

// finalvalue = true ? value1 :value2
// finalvalue = false ? value1 :value2

// x=89
// y="54"
// console.log(x%y)
// if(x=4)
// marks=40
// if(marks==24 && marks<=30){
//     console.log("topper");
// }
// else{
//     console.log("looser");
// }
// console.log(true||false)
// console.log(!true)
if(3<4){
    console.log("we move forther ")
}
else{
    console.log("we are not move forther")
}
3<4 ? "we move forther":"we are not move forther"