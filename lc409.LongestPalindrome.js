var longestPalindrome = function(s) {
    if(s.length == 1) return 1
    else if(s.length == 0) return 0
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if(!set.has(s[i])){
            set.add(s[i])
        }else{
            set.delete(s[i])
        }
    }
    if(set.size>0){
        return s.length - (set.size - 1)
    }
    return s.length - set.size
};

// var longestPalindrome = function(s) {
//     if(s.length == 1) return 1
//     else if(s.length == 0) return 0
//     let map = new Map()
//     for (let i = 0; i < s.length; i++) {
//         if(!map.has(s[i])){
//             map.set(s[i],1)
//         }else{
//             map.set(s[i],map.get(s[i])+1)
//         }
//     }
//     let check = false
//     let res = 0
//     map.forEach(value=>{
//         if(value%2==0) res += value
//         else{
//             check = true
//             res += value - 1
//         }
//     })
//     if(check) return res+1
//     return res
// };
console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("abb"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("bb"));
// console.log(longestPalindrome("Aa"));