var maxArea = function (h = []) {
  let a = 0;
  let b = h.length - 1;
  let max = 0;
  while (a < b) {
    if (h[a] < h[b]) {
      max = Math.max(max, h[a] * (b - a));
      a++;
    } else {
      max = Math.max(max, h[b] * (b - a));
      b--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
