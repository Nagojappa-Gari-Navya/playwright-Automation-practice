
// str="string"
// str2=str.split("").reverse().join()
// console.log(str2)
//in -built function
function reverseString(str){
   let reversed=""
   for(var i=str.length-1;i>=0;i--){
    reversed+=str[i]
   }
   return reversed

}
console.log(reverseString("Automation"))