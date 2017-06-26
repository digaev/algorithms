function insertionSort(array) {
  array = array.slice();

  for (let i = 1, l = array.length; i < l; ++i) {
    const value = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = value;
  }

  return array;
}

const array = [5, 4, 3, 2, 1];

console.log(insertionSort(array));