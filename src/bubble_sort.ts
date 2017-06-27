export default function bubbleSort(array: number[]): number[] {
  array = array.slice();

  for (let i = 0, l = array.length; i < l - 1; ++i) {
    let swapped: boolean = false;

    for (let j = i + 1; j < l; ++j) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  // True bubbles

  // let swapped: boolean = true;
  // while (swapped) {
  //   swapped = false;

  //   for (let i = 0, l = array.length; i < l - 1; ++i) {
  //     if (array[i] > array[i + 1]) {
  //       [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //       swapped = true;
  //     }
  //   }
  // }

  return array;
}
