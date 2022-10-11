var countAsterisks = function(s) {
    let a = []
    let check = false
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if(s[i] == '|' && check == false) {
            check = true
        }else if(s[i] == '|' && check == true) {
            check = false
        }else if(s[i]=='*' && check == false) {
            count++;
        }
    }
    return count
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));