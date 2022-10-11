var shortestCompletingWord = function(r,w){
    let map = new Map();
    r = r.toLowerCase();
    for (let i = 0; i < r.length; i++) {
        if(r[i]>='a'&&r[i]<='z'){
            if(!map.has(r[i])){
                map.set(r[i],1)
            }else{
                map.set(r[i],map.get(r[i])+1)
            }   
        }    
    }
    let res = new Map()
    for (let i = 0; i < w.length; i++) {
        let copy = new Map(map)
        for (let j = 0; j < w[i].length; j++) {
            if(copy.has(w[i][j])&&copy.get(w[i][j])>0){
                copy.set(w[i][j],copy.get(w[i][j])-1)
                if(copy.get(w[i][j])==0){
                    copy.delete(w[i][j])
                }
            }               
        }
        if(copy.size==0){
            res.set(w[i],w[i].length)
        }
    }
    if(res.size==1) return [...res.keys()][0]
    else{
        let arr = [...res.keys()]
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].length == Math.min(...[...res.values()])){
                return arr[i]
            }
        }
    }
};
console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));
console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]));
console.log(shortestCompletingWord("Ah71752", ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]));
console.log(shortestCompletingWord("OgEu755", ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]));
console.log(shortestCompletingWord("iMSlpe4", ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]));