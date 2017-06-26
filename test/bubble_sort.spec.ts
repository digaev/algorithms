import bubbleSort from "../src/bubble_sort";
import { sorted, unsorted } from "./fixtures";

test("bubbleSort()", () => {
  expect(bubbleSort(unsorted)).toEqual(sorted);
});
