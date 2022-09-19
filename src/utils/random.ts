export function getRandomValue(min: number, max: number, numAfterDecimal = 0) {
  return Number((Math.random() * (max - min) + min).toFixed(numAfterDecimal));
}

export function getRandomObjValue<T>(obj: Record<string, T>): T {
  const keys = Object.keys(obj);
  const key = keys[getRandomValue(0, keys.length)];
  return obj[key] as T;
}

export function getRandomArraySlice<T>(arr: T[]): T[] {
  const startPos = getRandomValue(0, arr.length - 1);
  const endPos = startPos + getRandomValue(startPos, arr.length);
  return arr.slice(startPos, endPos);
}

export function getRandomArrayItem<T>(arr: T[]): T {
  return arr[getRandomValue(0, arr.length - 1)];
}
