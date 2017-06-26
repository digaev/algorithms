export default function insertionSort(array: number[]): number[] {
  array = array.slice();

  for (let i = 1; i < array.length; ++i) {
    const value: number = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = value;
  }

  return array;
}
