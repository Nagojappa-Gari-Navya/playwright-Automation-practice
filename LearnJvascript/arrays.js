// navya =[]//empty array -no element
// arr=[3,8,2,9,4]//homogenous array -same type of data types 
// arr1=["navya","niha","radha"]//homogenous array
// arr2=[1,3,true,"navya"]//heterogenous//non homogenous
// //Index of the element always starts with 0 
// //for first element index is 0
// // console.log(arr.length)
// // console.log(arr)
// // console.log(arr1[0])
// // //concat-join two array
//   arr3=arr.concat(arr1)
// // console.log(arr3)
// //reverse()-reverse the array
// //arr4=arr3.reverse()
// //console.log(arr4)
// //sort()-this sort the element in ascending order
// arr5=arr.sort()
// console.log(arr5)
// //split()-convert string to array
// str="money boy"
// arr6=str.split("")
// console.log(arr6)
// str="navya"
// arr7=str.split("").reverse().join("")
// console.log(arr7)
// //join()-convert array to string
// //push()-add the new element at end of the arrat
//  Activities=["eat","sleep"]
// Activities.push("read")
// Activities.push("scrolling")
// Activities.push("playing")
// //unshift()-add the new element at the beginning of the array
// Activities.unshift("brushing")
// Activities.unshift("alaram setup")
// //pop()-remove the end element of the array
// Activities.pop()
// Activities.pop()
// //shift-()-remove the beginning element of the array
// Activities.shift()
// Activities.shift()
// //replace the element/change the element
// Activities[2]="drink"
// console.log(Activities)
// //arr=["bad","cat"]
//or
//   const array=new Array("bad","cat")
// console.log( array)
//indexOf()-search an element of an array and returns
//Indexvalue=Activities.indexOf("sleep")
//console.log(Indexvalue)
//forEach()-looping the array elements
// menuitems=["Admin","PIM","Leave"]
// //menuitems.includes("raju")-false
// //menuitems.includes("Admin")-true
// if(menuitems.includes("Admin")){
//     console.log("element is present")
// }
// menuitems.forEach(element => {
//     console.log("loop starts")
//     console.log(element)
//     console.log("loop ends")
    
// });
// menus=["Admin","PIM","Leave","buzz","Recruitment","abc"]
// arr9=menus.slice(2)//slice()-select the part how many elements delete and return the remaining array
//  console.log(arr9)
// console.log(menus[menus.length-2])//know the last element
// for(element of menus){
//     console.log("loop starts")
//     console.log(element)
//     console.log("loop ends")
// }
//or
// for(let i=0; i<=menus.length-1; i++){
//     console.log("loop starts")
//     console.log(menus[i])
//     console.log("loop ends")

// }
//map()-create a new array by calling a provided function on every element in the array
    // const numbers = [1, 2, 3];
    // const doubledNumbers = numbers.map(num => num * 2); // [2, 4, 6]
    // console.log(doubledNumbers)

    // let users=[{name:"navya"},{name:"anu"}]
    // let user=users.map(users => users.name)
    // console.log(user)
    //reduce()-Executes a reducer function on each element of the array, resulting in a single output value. 
    //     const numbers = [1, 2, 3, 4];
    // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10
    // console.log(sum)
        //  numbers=[2,3,4]
        //  product =numbers.reduce((acc,num) => acc * num,1)
        //  console.log(product)
    
    //filter()-Creates a new array with all elements that pass the test implemented by the provided function
    //     const numbers = [1, 2, 3, 4, 5];
    // const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
    // console.log(evenNumbers)
    //forEach()-Executes a provided function once for each array element. It does not return a new array.
    //       const fruits = ['apple', 'banana', 'orange'];
    // fruits.forEach(fruit => console.log(fruit));
    // console.log(fruits)
    // Output: apple, banana, orange (each on a new line)
   // findIndex()- Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
    //     const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    // const userIndex = users.findIndex(user => user.name === 'Alice'); // 0
    // console.log(userIndex)
    //Array.prototype.some(): Tests whether at least one element in the array passes the test implemented by the provided function. Returns true if at least one element passes, false otherwise.
    //     const numbers = [1, 2, 3, 4, 5];
    // const hasEven = numbers.some(num => num % 2 === 0); // true
    // console.log(hasEven)
    //Splice()-start,deletecount,...items
    // let numbers =[1,2,3,4];
    // numbers.splice(1,2,20,30);
    // console.log(numbers)

    // let fruits=["apple","banana","cherry","mango"]
    // fruits.splice(1,2)
    // console.log(fruits)
    //arr=[1,32,5,6,7,2,3,5,8]
    // arr1=["man","bat","cat"]
    // arr2="dnjvbjdv"
    // console.log(arr1.slice(1))

//    arr1.push("mat")
//    arr1.pop("")
//    arr1.unshift("banana")
//    arr1.shift("nat")
//    //console.log(arr1)
   //items=["van","can","money","tab","canban"]
//   items.forEach(element => {

//     console.log(items)
//   });
// for (const element of items) {
//      console.log("loop start")
//     console.log(element)
//     console.log("loop end")
// }
// for(let i=0;i<items.length;i++){
//       console.log("loop start")
//     console.log(items[i])
//     console.log("loop end")
// }
//    for(let i=0;i<items.length;i++){
//     console.log(i)
//     console.log(items)

//    }

