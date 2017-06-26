import selectionSort from "../src/selection_sort";
import { sorted, unsorted } from "./fixtures";

test("selectionSort()", () => {
  expect(selectionSort(unsorted)).toEqual(sorted);
});
