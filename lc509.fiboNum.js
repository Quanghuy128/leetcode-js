// var fib = function(n) {
//     if(n<=1) return n;
//     return fib(n-2)+fib(n-1)
// };

//optimize recursion
var fib = function(n) {
    let F = new Array(1000)
    if(F[n]!=0) return F[n]
    if(n<=2){
        F[1] = 1
        F[2] = 1
        return 1;
    }
    F[n] = fib(n-2)+fib(n-1)
    console.log(F[n]);
    return F[n]
};
console.log(fib(2));