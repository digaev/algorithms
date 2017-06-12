function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const array = [];

  let l = 0;
  let r = 0;

  while (l + r < left.length + right.length) {
    const lVal = left[l];
    const rVal = right[r];

    if (lVal === undefined) {
      array.push(rVal);
      r++;
    } else if (rVal === undefined) {
      array.push(lVal);
      l++;
    } else if (lVal < rVal) {
      array.push(lVal);
      l++;
    } else {
      array.push(rVal);
      r++;
    }
  }

  return array;
}

const array = [5, 4, 3, 2, 1];

console.log(mergeSort(array));
