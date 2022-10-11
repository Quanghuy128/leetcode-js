var maxProfit = function(p=[]) {
    let l = 0,r = 1;
    let a = 0;
    while(r<p.length){
        if(p[l]>=p[r]){
            l = r;
        }else {
            a = Math.max(a,p[r] - p[l])
        }
        r++;
    }
    return a;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([3,6,1,1,4,8,9]));