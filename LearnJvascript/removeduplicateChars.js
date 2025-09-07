function removeduplicharacter(str){
    var answer=""
    var freq=[]
    for(i=0;i<str.length;i++){
        let char=str[i]
        if(freq[char]){
            freq[char]++;
        }
        else{
            freq[char]=1
            answer=answer+char
        }
    }
    return answer
}
console.log(removeduplicharacter("nagojappagarinavya"))//nagojprivy