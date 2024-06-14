export function update<T>(array: Array<T>, index: number, value: T) {
  const newArray = array.map((currentValue, idx) =>
    idx === index ? value : currentValue
  );

  return newArray;
}
