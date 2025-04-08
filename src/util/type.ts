export const isNotNil = <T>(x: T): x is Exclude<T, undefined | null> =>
  x !== undefined && x !== null;
