var intersect = function(n1, n2) {
    if(n1.length==0 || n2.length==0) return []
    if(n2.length > n1.length) return intersect(n2, n1)
    let map = new Map();
    for (let i = 0; i < n2.length; i++) {
        if(map.has(n2[i])){
            map.set(n2[i],(map.get(n2[i])+1))
        }else{
            map.set(n2[i],1)
        }
    }
    let c = []
    for (let i = 0; i < n1.length; i++) {
        if(map.has(n1[i]) && map.get(n1[i])>0){
            c.push(n1[i]);
            map.set(n1[i],map.get(n1[i])-1)
        }
    }
    return c
};
console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));
