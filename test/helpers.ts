export function randomArray(count: number, max: number): number[] {
  const array: number[] = [];

  for (let i = 0; i < count; ++i) {
    array.push(Math.round(Math.random() * max));
  }

  return array;
}
