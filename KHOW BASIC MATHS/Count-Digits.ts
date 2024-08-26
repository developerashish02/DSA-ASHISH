const n: number = 2446;
let count: number = 0;

const countTheDigits = (n: number) => {
  // time complexity : O(log n)
  // space complexity : O(1)

  if (n === 0) {
    return 1;
  }

  while (n !== 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
};

const countTheDigits2 = (n: number) => {
  // time complexity : O(d)
  // space complexity : O(1)

  const num = String(n);
  return num.length;
};

const ans = countTheDigits2(11112);
console.log(ans);
