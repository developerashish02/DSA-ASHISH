function validateInput(num) {
  return typeof num !== "number";
}

function reverseTheNumber(num) {
  if (validateInput(num)) return "Input must be a number";

  if (num === 0) {
    return num;
  }

  const sign = Math.sign(num);

  num = Math.abs(num);

  const convertNumToString = String(num);
  let reverseNumber = "";

  for (let i = convertNumToString.length - 1; i > 0; i--) {
    reverseNumber += convertNumToString[i];
  }

  return reverseNumber;
}

function reverseTheNumber2(num) {
  if (validateInput(num)) return "Input must be a number";

  if (num === 0) {
    return 0;
  }

  const sign = Math.sign(num);

  num = Math.abs(num);

  let reverse = 0;

  while (num !== 0) {
    let lastDigit = Math.floor(num) % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return sign * reverse;
}

const num = 1234;

const result = reverseTheNumber2(-1234);
console.log(result);
