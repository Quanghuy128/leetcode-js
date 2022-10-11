var reverseString = function(s=[]) {
    if(s.length<=1) return;
    let l=0, r=s.length-1
    while(l<=r){
        [s[l],s[r]] = [s[r],s[l]]
        l++;r--
    }
};
s = ["h","e","l","l","o"]
reverseString(s)
console.log(s);

