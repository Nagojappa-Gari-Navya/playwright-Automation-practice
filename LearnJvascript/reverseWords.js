const str="big black bit a big black dog on his black nose"
arr=str.split("")
console.log(arr)
finalstr=""
for(i=0;i<=arr.length-1;i++){
    var str2=arr[i].split("").reverse().join("")
    finalstr=finalstr+""+str2
}
console.log(finalstr.trim())
