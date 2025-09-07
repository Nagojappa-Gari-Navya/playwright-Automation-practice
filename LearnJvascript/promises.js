// const p = new Promise((resolve,reject) => {
//     let x=2;
//     if(x===2){
//         resolve("success");
//     //    resolve(
//     //     {
//     //         firstname:"Navya",
//     //         lastname:"n"
//     //     }
//     //    )
//     }
//     else {
//         reject("fail");
//     }

// })
// console.log(p)
// p.then((message) => console.log(message))
// .catch((message) => console.log(message))
// async function myFunction(){
//     return promise.resolve("Hello");
// }
// async function main(){
//     const x= await myFunction()
//     console.log(x)
// }
// main()
async function step1(value){
    return value + 10;
}
async function step2(value){
    return value + 10;
}
async function step3(value){
    return value + 10;
}
async function run(){
    let result1=await step1(10);
    let result2=await step2(result1);
    let result3=await step3(result2);
    console.log("Results" +result3);
    
}
run()
