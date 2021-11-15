import './style.css';

function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    arr.sort((a, b) => a - b);
    if (num <= arr[i]) {
      return arr.indexOf(arr[i]);
    }
    if (num > arr[arr.length - 1]) {
      return arr.length;
    }
  }
}