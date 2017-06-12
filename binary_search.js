function binarySearch(array, element, start, end) {
  if (end < start) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);
  const value = array[middle];

  if (value === element) {
    return middle;
  } else if (element < value) {
    return binarySearch(array, element, start, middle - 1);
  } else if (element > value) {
    return binarySearch(array, element, middle + 1, end);
  }
}

const array = [];

for (let i = 0; i < 100; ++i) {
  array.push(i);
}

console.log(binarySearch(array, 43, 0, array.length - 1));
