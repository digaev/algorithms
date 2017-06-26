export default function selectionSort(array: number[]): number[] {
  array = array.slice();

  for (let i = 0, l = array.length; i < l; ++i) {
    let min: number = array[i];
    let minIndex: number = -1;

    for (let j = i + 1; j < l; ++j) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }

    if (minIndex !== -1) {
      [array[i], array[minIndex]] = [min, array[i]];
    }
  }

  return array;
}
