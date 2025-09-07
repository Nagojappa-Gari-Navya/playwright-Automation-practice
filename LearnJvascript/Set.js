// const arr=[2,3,4,5,6,7,8,5,6,7,4]
// const uniqueArr=[...new Set(arr)]
// console.log(uniqueArr)
const arr=[2,5,6,7,8,9,3,4,6,7,5,4,9]
const uniqueArr=[]
for(let i=0;i<arr.length;i++){
    if(!uniqueArr.includes(arr[i])){
        uniqueArr.push(arr[i])
    }
}
console.log(uniqueArr)
//https://github.com/Nagojappa-Gari-Navya/JanitriLoginAutomation
