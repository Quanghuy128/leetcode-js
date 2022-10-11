var isPerfectSquare = function (num) {
  let high = 100000,
    low = 1,
    mid,
    sqrt;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    sqrt = mid * mid;
    console.log(low, high, mid, sqrt);
    if (sqrt == num) return true;
    else if (sqrt > num) high = mid - 1;
    else low = mid + 1;
  }
  return false;
};

// var isPerfectSquare = function (num) {
//     return Math.sqrt(num) == Math.floor(Math.sqrt(num))
// }

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(9));
