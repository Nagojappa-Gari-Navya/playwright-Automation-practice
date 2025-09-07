let number=100110011
let str=String(number)
var count=0
var count2=0
for(let i=0;i<str.length;i++){
    if(str[i]=="1"){
        count++
    }
    if(str[i]=="0"){
        count2++
    }
}
console.log("Count of 1s:",count)
console.log("Count of 1s:",count2)
