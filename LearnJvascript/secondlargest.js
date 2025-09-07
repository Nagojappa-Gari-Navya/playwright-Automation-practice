// var x=[2,3,4,55,34,67,89]
// var y=x.sort()
// var secondlargenumber=y[y.length-2]
// console.log(secondlargenumber)
// var indexofseclarge=x.indexOf(secondlargenumber)
// console.log(indexofseclarge)
//by using forloop
function secondHighest(arr){
    let first=-Infinity,second=-Infinity
    for(let num of arr){
        if(num>first){
            second=first
            first=num
        }
        else if(num>second && num<first){
            second=num
        }
    }
    return second===Infinity?null:second
}
console.log(secondHighest([2,66,78,45,345]))