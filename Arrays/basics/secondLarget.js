function print2largest(arr) {
  let firstLarget = Math.max(...arr);
  let secondLarget = -1111;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLarget && arr[i] !== firstLarget) {
      secondLarget = arr[i];
    }
  }

  return secondLarget;
}

const array5 = [10, 20];

const secondLarget = print2largest(array5);

console.log(secondLarget);
