export const unsorted: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export const sorted: number[] = unsorted.slice().sort((a: number, b: number) => a - b);
