function quickSort(array) {
  array = array.slice();

  partition(array, 0, array.length);

  return array;
}

function partition(array, start, before) {
  const length = before - start;

  if (length <= 1) {
    return;
  }

  const pivotIndex = start + Math.floor(Math.random() * length);

  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  const pivot = array[start];
  let pivotRank = start;

  for (let i = start + 1; i < before; ++i) {
    if (array[i] < pivot) {
      pivotRank++;
      [array[i], array[pivotRank]] = [array[pivotRank], array[i]];
    }
  }

  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }

  partition(array, start, pivotRank);
  partition(array, pivotRank + 1, before);
}

const array = [5, 4, 3, 2, 1];

console.log(quickSort(array));
