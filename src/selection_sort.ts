export default function selectionSort(array: number[]): number[] {
  array = array.slice();

  for (let i = 0, l = array.length; i < l - 1; ++i) {
    let min: number = array[i];
    let minIndex: number = i;

    for (let j = i + 1; j < l; ++j) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [min, array[i]];
  }

  return array;
}
