const n = 2446;
let count = 0;

const countTheDigits = (n) => {
  // time complexity : O(log n)
  // space complexity : O(1)

  if (n === 0) {
    return 1;
  }

  while (n !== 0) {
    let lastDigit = n % 10;
    count++;
    n = parseInt(n / 10);
  }

  return count;
};

const countDigits2 = (n) => {
  // time complexity : O(d)
  // space complexity : O(1)

  const num = String(n);
  return num.length;
};

const ans = countTheDigits(11112);
console.log(ans);
