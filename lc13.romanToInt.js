var romanToInt = function(s) {
    var result = 0;
    var i = 0;
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    while (i < s.length) {
        result = i + 1 < s.length && roman[s[i]] < roman[s[i + 1]] ? result - roman[s[i]] : result + roman[s[i]];
        i++;
    }
    return result;
};

console.log(romanToInt("XI"));