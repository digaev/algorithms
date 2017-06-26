export const unsorted: number[] = [13, 3, 45, 23, 76, 59, 0];
export const sorted: number[] = unsorted.slice().sort((a: number, b: number) => a - b);
