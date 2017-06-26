export const unsorted: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
export const sorted: number[] = unsorted.slice().sort((a: number, b: number) => a - b);
