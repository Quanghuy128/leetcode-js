var key = "the quick brown fox jumps over the lazy dog"
var msg = "vkbs bs t suepuv"
var decodeMessage = function(key, msg) {
    let decodeMessage = []
    let map = new Map();
    let a = "abcdefghijklmnopqrstuvwxyz"
    let count = 0
    for (const e of key) {
        if (!map.has(e) && e !== " ") {
            map.set(e, a[count]);
            count++;
        }
    }

    for (const e of msg) {
        if(map.has(e)){
            decodeMessage.push(map.get(e))
        }else if(e === " "){
            decodeMessage.push(" ")
        }
    }
    return decodeMessage.join("")
};

console.log(decodeMessage(key, msg));