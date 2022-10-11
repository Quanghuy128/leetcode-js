// var isPowerOfTwo = function(n) {
//     if(n==0) return false
//     return Math.ceil(Math.log2(n)) == Math.floor(Math.log2(n))
// };
var isPowerOfTwo = function(n) {
    if(n==0) return false
    while(n>1 && (n&1)==0)
        n>>=1
    return n==1?true:false
};
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(14));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(32));