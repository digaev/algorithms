import insertionSort from "../src/insertion_sort";

test("insertionSort()", () => {
  const array: number[] = [13, 3, 45, 23, 76, 59, 0];
  const sorted: number[] = array.slice().sort((a: number, b: number) => a - b);

  expect(insertionSort(array)).toEqual(sorted);
});
