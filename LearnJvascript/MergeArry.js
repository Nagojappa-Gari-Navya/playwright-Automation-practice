// arr1=["a","b","c","d","e"]
// arr2=["1","2"]
// output=["a","1","b","2","c","d","e"]
//or
array1=["a","b","c","d","e"]
array2=["1","2","3","4","5","6","7"]
// output=["a","1","b","2","c","3","d","4","e","5","6","7"]
var arr1len=array1.length
var arr2len=array2.length
var output=[]
var len=array1.length>array2.length?array1.length:array2.length
console.log(len)
for(let i=0;i<len;i++){
    if(i<array1len){
        output.push(array1[i])
    }
    if(i<arr2len){
        output.push(array2[i])
    }
}
console.log(output)
