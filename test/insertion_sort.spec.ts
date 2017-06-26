import insertionSort from "../src/insertion_sort";
import { sorted, unsorted } from "./fixtures";

test("insertionSort()", () => {
  expect(insertionSort(unsorted)).toEqual(sorted);
});
