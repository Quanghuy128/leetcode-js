var canBeEqual = function(k, a) {
    if([...new Set(a)].length != [...new Set(k)].length) return false
    let map = new Map()
    for (let i = 0; i < k.length; i++) {
        if(!map.has(k[i])){
            map.set(k[i],1)
        }else{
            map.set(k[i],map.get(k[i])+1)
        }        
    }
    for (let i = 0; i < a.length; i++) {
        if(!map.has(a[i]) || map.get(a[i])==0){
            return false
        }else{
            map.set(a[i],map.get(a[i])-1)
        }     
    }
    return true
};
console.log(canBeEqual([1,2,3,4], [2,4,1,3]));
console.log(canBeEqual([1,2,2,3],[1,1,2,3]));
console.log(canBeEqual([1,12], [12,1]));
console.log(canBeEqual([3,7,9], [3,7,11]));
console.log(canBeEqual([1,1,1,1,1], [1,1,1,1,1]));