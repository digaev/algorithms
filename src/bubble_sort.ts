export default function bubbleSort(array: number[]): number[] {
  array = array.slice();

  for (let i = 0, l = array.length; i < l - 1; ++i) {
    for (let j = i + 1; j < l; ++j) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }

  return array;
}
