// var isPalindrome = function(s) {
//     let n = []
//     for (let i = 0; i < s.length;i++) {
//         if(s[i]>='A'&&s[i]<='Z' || s[i]>='a'&&s[i]<='z' || s[i]>='0'&&s[i]<='9'){
//             n.push(s[i].toLowerCase());
//         }
//     }
//     console.log(n);
//     let l=0, r=n.length-1;
//     while(l<=r){
//         console.log(n[l],n[r]);
//         if(n[l]!=n[r]) return false
//         l++;r--;
//     }
//     return true
// };

var isPalindrome = function(str) {
    let s = str.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
    let l=0,r=s.length-1;
    while(l<=r){
        if(s[l]!==s[r]) return false
        l++; r--;
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0p"));
console.log(isPalindrome("ab_a"));

