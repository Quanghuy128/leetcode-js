var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0
    else if(s.length == 1) return 1
    
    let set = new Set()
    let check = [...new Set(s)]
    max = Number.MIN_VALUE, tmp = 0
    for (let i = 0; i < s.length; i++){
        tmp = 0;
        while(!set.has(s[i+tmp]) && (tmp+i)<s.length){
            set.add(s[i+tmp])
            tmp++
        }
        if(set.size == check.length) return set.size
        if(max<set.size){
            max = set.size     
        }
        set.clear();
    }
    return max
}
console.log(lengthOfLongestSubstring("aababcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("au"));