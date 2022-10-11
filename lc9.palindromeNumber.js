
var x = 11211;
var isPalindrome = function(x) {
    if(x<0) return false;
    let arr = [];
    while(x>0){
        arr.push(x%10);
        x = Math.floor(x/10);
    }
    return arr.join('') === arr.reverse().join('');
};

console.log(isPalindrome(x));