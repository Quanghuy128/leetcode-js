var plusOne = function(n) {
    let i = n.length - 1
    while(i >= 0){
        n[i]++
        if(n[i]>9){
            n[i]=0
        }else return n
        i--;
    } 
    n.unshift(1)
    return n
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3,7]));
console.log(plusOne([1,2,3]));
console.log(plusOne([9]));
console.log(plusOne([0]));
 