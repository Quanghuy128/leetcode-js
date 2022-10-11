var lengthOfLastWord = function(s) {
    s = s.trim();
    for(let i = s.length - 1; i>=0;i--){
        if(i==0) return s.length
        if(s[i]==" ") return s.length-i-1 
    }
    return 0
};
console.log(lengthOfLastWord("hello worf"));
console.log(lengthOfLastWord("hello"));
console.log(lengthOfLastWord("h"));
console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord("  moon   "));
