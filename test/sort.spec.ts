import bubbleSort from "../src/bubble_sort";
import insertionSort from "../src/insertion_sort";
import selectionSort from "../src/selection_sort";

import { randomArray } from "./helpers";

const unsorted: number[] = randomArray(1000, 1000);
const sorted: number[] = unsorted.slice().sort((a: number, b: number) => a - b);

test("bubbleSort()", () => {
  expect(bubbleSort(unsorted)).toEqual(sorted);
});

test("insertionSort()", () => {
  expect(insertionSort(unsorted)).toEqual(sorted);
});

test("selectionSort()", () => {
  expect(selectionSort(unsorted)).toEqual(sorted);
});
