// function countCharacters(str){
//     const charCount={}
//     for(let char of str){
//         charCount[char]=(charCount[char] || 0)+1;
    
//     }
//     return charCount
    
// }
//  const result=countCharacters("manmadhudu")
// console.log(result)
function countCharacters(str){
    let countchar={}
    for(let char of str ){
        countchar[char]=(countchar[char] || 0)+1
    }
    return countchar
}
const result=countCharacters("yamaleela")
console.log(result)