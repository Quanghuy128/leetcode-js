var canConstruct = function(r, m) {
    let map = new Map()
    for (let i = 0; i < r.length; i++) {
        if(!map.has(r[i])){
            map.set(r[i],1)
        }else{
            map.set(r[i],map.get(r[i])+1)
        }
    }
    for (let i = 0; i < m.length; i++) {
        if(map.has(m[i]) && map.get(m[i])>0){
            map.set(m[i],map.get(m[i])-1)
            if(map.get(m[i])==0) map.delete(m[i])
        }        
    }
    if(map.size === 0){
        return true
    }else return false
};
// console.log(canConstruct("a","b"));
// console.log(canConstruct("aa","ab"));
console.log(canConstruct("aa","aab"));