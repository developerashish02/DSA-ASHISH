function findLargest(array) {
  if (array.length <= 0) {
    return "Array is empty..";
  }
  array.sort((a, b) => b - a);

  return array[0];
}

function findLargest2(array) {
  if (array.length <= 0) {
    return "Array is empty";
  }
  let maxi = array[0];

  for (let ele of array) {
    if (ele > maxi) {
      maxi = ele;
    }
  }

  return maxi;
}

const array = [12, 3, 4, 5, 6, 7, 8];
const res = findLargest2(array);
console.log(res, "Maximum ele");
