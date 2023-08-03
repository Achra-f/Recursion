function fibs(n) {
  let list = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    list.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return list;
}

function fibsRec(n, a = 0, b = 1, list = []) {
  if (n === 0) {
    return list;
  }
  list.push(a);
  return fibsRec(n - 1, b, a + b, list);
}

console.log(fibs(8));
console.log(fibsRec(8));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
