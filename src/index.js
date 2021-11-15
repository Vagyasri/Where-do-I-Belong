import './style.css';

/* function getIndexToIns(arr, num) {
  for (let i = 0; i < arr.length; i += 1) {
    arr.sort((a, b) => a - b);
    if (num <= arr[i]) {
      return arr.indexOf(arr[i]);
    }
    if (num > arr[arr.length - 1]) {
      return arr.length;
    }
  }
  return 0;
} */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= num) { return i; }
  }

  return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([], 1)); // 0